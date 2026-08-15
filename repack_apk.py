import os
import zipfile
import shutil

apk_file = 'vincons-exam-new.apk'
unpacked_dir = 'apk_unpacked'
new_apk = 'unaligned.apk'

if os.path.exists(unpacked_dir):
    shutil.rmtree(unpacked_dir)
print("Extracting APK...")
with zipfile.ZipFile(apk_file, 'r') as z:
    z.extractall(unpacked_dir)

print("Copying updated web files...")
src_dir = '.'
dest_dir = os.path.join(unpacked_dir, 'assets', 'www')
for root, _, files in os.walk(src_dir):
    if root == src_dir:
        for f in files:
            if f.endswith(('.html', '.js', '.css')):
                shutil.copy(os.path.join(root, f), os.path.join(dest_dir, f))
    elif root == os.path.join(src_dir, 'data'):
        data_dest = os.path.join(dest_dir, 'data')
        os.makedirs(data_dest, exist_ok=True)
        for f in files:
            shutil.copy(os.path.join(root, f), os.path.join(data_dest, f))

meta_inf = os.path.join(unpacked_dir, 'META-INF')
if os.path.exists(meta_inf):
    shutil.rmtree(meta_inf)

print("Repacking APK...")
# Repack with proper compression
# resources.arsc and media files must not be compressed in APKs!
STORED_EXTENSIONS = ('.png', '.jpg', '.jpeg', '.mp3', '.mp4', '.arsc')

with zipfile.ZipFile(new_apk, 'w') as z:
    for root, _, files in os.walk(unpacked_dir):
        for f in files:
            file_path = os.path.join(root, f)
            # Make sure it uses forward slashes for ZIP format
            arcname = os.path.relpath(file_path, unpacked_dir).replace('\\', '/')
            
            # Determine compression method
            if f.endswith(STORED_EXTENSIONS) or f == 'resources.arsc':
                compress_type = zipfile.ZIP_STORED
            else:
                compress_type = zipfile.ZIP_DEFLATED
                
            z.write(file_path, arcname, compress_type=compress_type)

print("Done creating unaligned.apk")
