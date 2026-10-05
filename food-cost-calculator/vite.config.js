import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import https from 'https'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-db-sync',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/save' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            req.on('end', () => {
              try {
                // Lưu vào tệp chính trong thư mục code
                fs.writeFileSync(path.resolve(__dirname, 'database.json'), body, 'utf8');

                // Tự động sao lưu dự phòng lên Desktop (An toàn tuyệt đối trước git reset/clean)
                const desktopDir = 'C:\\Users\\DELL\\Desktop\\Theo doi chi tiêu nhà ở\\backups';
                if (!fs.existsSync(desktopDir)) {
                  fs.mkdirSync(desktopDir, { recursive: true });
                }
                
                // Ghi đè bản mới nhất trên Desktop
                fs.writeFileSync(path.resolve(desktopDir, 'database_latest_sync.json'), body, 'utf8');

                // Ghi thêm tệp backup theo mốc thời gian để khôi phục lịch sử nếu cần
                const now = new Date();
                const pad = (n) => String(n).padStart(2, '0');
                const timestamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
                fs.writeFileSync(path.resolve(desktopDir, `database_backup_${timestamp}.json`), body, 'utf8');

                // Tự động đồng bộ liên tục lên Google Sheets chạy ngầm
                try {
                  const dbObj = JSON.parse(body);
                  const googleSheetUrl = dbObj.googleSheetUrl;
                  if (googleSheetUrl && googleSheetUrl.startsWith('http')) {
                    const url = new URL(googleSheetUrl);
                    const postData = JSON.stringify({ database: dbObj });
                    const options = {
                      hostname: url.hostname,
                      path: url.pathname + url.search,
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(postData)
                      }
                    };
                    const syncReq = https.request(options, (syncRes) => {
                      let syncBody = '';
                      syncRes.on('data', chunk => syncBody += chunk);
                      syncRes.on('end', () => {
                        console.log(`[Google Sheets Auto-Sync] Status: ${syncRes.statusCode}, Response: ${syncBody}`);
                      });
                    });
                    syncReq.on('error', (e) => {
                      console.error('[Google Sheets Auto-Sync] Connection error:', e.message);
                    });
                    syncReq.write(postData);
                    syncReq.end();
                  }
                } catch (syncErr) {
                  console.error('[Google Sheets Auto-Sync] Processing error:', syncErr.message);
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true }));
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          } else if (req.url === '/api/load' && req.method === 'GET') {
            try {
              const dbPath = path.resolve(__dirname, 'database.json');
              const desktopBackupPath = 'C:\\Users\\DELL\\Desktop\\Theo doi chi tiêu nhà ở\\backups\\database_latest_sync.json';
              
              // Nếu mất file cục bộ do git clean, tự động nạp lại từ bản sao lưu an toàn trên Desktop!
              if (!fs.existsSync(dbPath) && fs.existsSync(desktopBackupPath)) {
                console.log('Auto-restoring database.json from Desktop backup...');
                const backupData = fs.readFileSync(desktopBackupPath, 'utf8');
                fs.writeFileSync(dbPath, backupData, 'utf8');
              }

              if (fs.existsSync(dbPath)) {
                const data = fs.readFileSync(dbPath, 'utf8');
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(data);
              } else {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'No database found' }));
              }
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          } else {
            next();
          }
        });
      }
    }
  ],
})
