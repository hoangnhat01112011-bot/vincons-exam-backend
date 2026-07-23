/**
 * IKIGAI WELLNESS CENTER - 3D INTERACTIVE BUILDING MODEL & M&E SITE INSPECTION
 * Vincons Exam App - BVTK Cụm 3 (Điện Nhẹ & M&E)
 */

window.Ikigai3D = (function () {
    let container, scene, camera, renderer, animationFrameId;
    let hotspots = [];
    let activeHotspotId = null;
    let targetCameraPos = null;
    let targetLookAt = null;
    let currentLookAt = { x: 0, y: 3, z: 0 };
    let isUserInteracting = false;
    let mouse = { x: 0, y: 0 };
    let cameraAngle = 0;
    let onSelectCallback = null;

    const HOTSPOT_DATA = [
        {
            id: 'pos_1',
            name: 'Vị trí 1: Sàn Kỹ Thuật (Tủ Điện MDB & Cáp Động Lực)',
            room: 'Sàn Kỹ Thuật (Bên Trái)',
            pos: { x: -14, y: 2.5, z: 0 },
            camPos: { x: -10, y: 4, z: 6 },
            lookAt: { x: -14, y: 2.5, z: 0 },
            pdfArea: 'san-ky-thuat',
            desc: 'Tủ điện tổng MDB, hệ thống cáp động lực, máng cáp và aptomat tổng.'
        },
        {
            id: 'pos_2',
            name: 'Vị trí 2: Sảnh Trung Tâm (Máng Cáp & Chiếu Sáng Thông Tầng)',
            room: 'Sảnh Đón Tiếp (82 m²)',
            pos: { x: 0, y: 4, z: 2 },
            camPos: { x: 0, y: 6, z: 12 },
            lookAt: { x: 0, y: 3, z: 0 },
            pdfArea: 'sanh-trung-tam',
            desc: 'Hệ thống máng cáp treo trần, cáp điện nguồn & cụm đèn thả trang trí thông tầng.'
        },
        {
            id: 'pos_3',
            name: 'Vị trí 3: Phòng Yoga Tầng Lửng (HVAC & Báo Cháy FA/PA)',
            room: 'Phòng Yoga (35 m²)',
            pos: { x: -6, y: 6.5, z: -3 },
            camPos: { x: -4, y: 8, z: 4 },
            lookAt: { x: -6, y: 6.5, z: -3 },
            pdfArea: 'phong-yoga',
            desc: 'Hệ thống điều hòa không khí VRV/HVAC, đầu báo khói báo cháy & loa âm trần PA.'
        },
        {
            id: 'pos_4',
            name: 'Vị trí 4: Phòng Thiền Tầng Lửng (Điện Nhẹ & Công Tắc Ổ Cắm)',
            room: 'Phòng Thiền (35 m²)',
            pos: { x: 6, y: 6.5, z: -3 },
            camPos: { x: 4, y: 8, z: 4 },
            lookAt: { x: 6, y: 6.5, z: -3 },
            pdfArea: 'phong-thien',
            desc: 'Tủ điện nhẹ IDF, mạng LAN/TEL, camera CCTV & công tắc ổ cắm âm tường.'
        }
    ];

    function init(containerId, onSelectCb) {
        container = document.getElementById(containerId);
        if (!container) return;

        onSelectCallback = onSelectCb;

        // Check if Three.js is loaded
        if (typeof THREE === 'undefined') {
            loadThreeJS(() => setupScene());
        } else {
            setupScene();
        }
    }

    function loadThreeJS(callback) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.onload = callback;
        script.onerror = () => {
            console.error('Failed to load Three.js CDN, rendering 2D Canvas Fallback.');
            setupCanvasFallback();
        };
        document.head.appendChild(script);
    }

    function setupScene() {
        container.innerHTML = '';

        // Scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a252f);
        scene.fog = new THREE.FogExp2(0x1a252f, 0.015);

        // Camera
        const width = container.clientWidth || 600;
        const height = container.clientHeight || 450;
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.set(0, 15, 28);
        camera.lookAt(0, 3, 0);

        // Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xfffaed, 0.9);
        dirLight.position.set(20, 30, 15);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        scene.add(dirLight);

        const fillLight = new THREE.PointLight(0xf39c12, 0.5, 30);
        fillLight.position.set(0, 5, 0);
        scene.add(fillLight);

        // Build Ikigai Wellness Center 3D Model Structure
        buildIkigaiBuilding();

        // Mouse Controls
        setupControls();

        // Resize Listener
        window.addEventListener('resize', onWindowResize);

        // Start Animation Loop
        animate();
    }

    function buildIkigaiBuilding() {
        const group = new THREE.Group();

        // 1. Ground Slab (40m x 16.4m x 0.4m)
        const groundGeo = new THREE.BoxGeometry(40, 0.4, 16.4);
        const groundMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.8 });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.position.y = -0.2;
        ground.receiveShadow = true;
        group.add(ground);

        // Lobby Floor Wood Finish (82m² central area)
        const floorGeo = new THREE.PlaneGeometry(20, 14);
        const floorMat = new THREE.MeshStandardMaterial({ color: 0xd35400, roughness: 0.4 });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.set(0, 0.01, 0);
        group.add(floor);

        // 2. Japanese Curved Roof Structure
        const roofGroup = new THREE.Group();
        const roofMat = new THREE.MeshStandardMaterial({ color: 0x34495e, roughness: 0.5, side: THREE.DoubleSide });

        // Main Curved Roof Shell
        const roofGeo = new THREE.ConeGeometry(24, 7, 4);
        const roofMesh = new THREE.Mesh(roofGeo, roofMat);
        roofMesh.rotation.y = Math.PI / 4;
        roofMesh.position.set(0, 12, 0);
        roofMesh.scale.set(1.1, 0.6, 0.7);
        roofGroup.add(roofMesh);
        group.add(roofGroup);

        // 3. Glass Facade & Columns
        const glassMat = new THREE.MeshPhysicalMaterial({
            color: 0x3498db,
            transparent: true,
            opacity: 0.35,
            roughness: 0.1,
            transmission: 0.9
        });
        const glassGeo = new THREE.BoxGeometry(38, 9, 0.2);
        const glassWall = new THREE.Mesh(glassGeo, glassMat);
        glassWall.position.set(0, 4.5, 8);
        group.add(glassWall);

        // 4. Reception Counter (Sảnh Trung Tâm)
        const deskGeo = new THREE.BoxGeometry(6, 1.2, 1.8);
        const deskMat = new THREE.MeshStandardMaterial({ color: 0x7f8c8d });
        const desk = new THREE.Mesh(deskGeo, deskMat);
        desk.position.set(0, 0.6, 2);
        group.add(desk);

        // Logo Board "iKigai Wellness Center"
        const logoBoardGeo = new THREE.BoxGeometry(4, 2, 0.2);
        const logoBoardMat = new THREE.MeshStandardMaterial({ color: 0xf39c12 });
        const logoBoard = new THREE.Mesh(logoBoardGeo, logoBoardMat);
        logoBoard.position.set(0, 4, 1.9);
        group.add(logoBoard);

        // 5. Symmetric Dual Staircases
        const stairMat = new THREE.MeshStandardMaterial({ color: 0xecf0f1 });
        for (let i = 0; i < 10; i++) {
            // Left Staircase
            const stepLeft = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.3, 0.8), stairMat);
            stepLeft.position.set(-9 + i * 0.4, 0.15 + i * 0.35, 3 - i * 0.5);
            group.add(stepLeft);

            // Right Staircase
            const stepRight = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.3, 0.8), stairMat);
            stepRight.position.set(9 - i * 0.4, 0.15 + i * 0.35, 3 - i * 0.5);
            group.add(stepRight);
        }

        // 6. Mezzanine Floor Slabs (Yoga & Thiền rooms)
        const mezMatLeft = new THREE.MeshStandardMaterial({ color: 0x16a085, roughness: 0.6 }); // Yoga (Greenish)
        const mezMatRight = new THREE.MeshStandardMaterial({ color: 0xf39c12, roughness: 0.6 }); // Thiền (Warm Gold)

        const mezYoga = new THREE.Mesh(new THREE.BoxGeometry(10, 0.3, 8), mezMatLeft);
        mezYoga.position.set(-6, 4.2, -3);
        group.add(mezYoga);

        const mezThien = new THREE.Mesh(new THREE.BoxGeometry(10, 0.3, 8), mezMatRight);
        mezThien.position.set(6, 4.2, -3);
        group.add(mezThien);

        // 7. M&E Technical Rooms & Equipment Models
        // Left Technical Floor (Sàn Kỹ Thuật Trái)
        const techRoomLeft = new THREE.Mesh(new THREE.BoxGeometry(8, 4, 14), new THREE.MeshStandardMaterial({ color: 0x95a5a6, transparent: true, opacity: 0.7 }));
        techRoomLeft.position.set(-15, 2, 0);
        group.add(techRoomLeft);

        // 3D MDB Electrical Cabinet
        const mdbGeo = new THREE.BoxGeometry(1.5, 2.5, 0.8);
        const mdbMat = new THREE.MeshStandardMaterial({ color: 0x27ae60, roughness: 0.3 }); // MDB Green
        const mdbCabinet = new THREE.Mesh(mdbGeo, mdbMat);
        mdbCabinet.position.set(-14, 1.25, 0);
        group.add(mdbCabinet);

        // 3D Cable Trays & Air Ducts (HVAC)
        const trayGeo = new THREE.BoxGeometry(36, 0.2, 0.6);
        const trayMat = new THREE.MeshStandardMaterial({ color: 0xbdc3c7, metalness: 0.8 });
        const cableTray = new THREE.Mesh(trayGeo, trayMat);
        cableTray.position.set(0, 4.8, -1);
        group.add(cableTray);

        const ductGeo = new THREE.BoxGeometry(12, 0.8, 0.8);
        const ductMat = new THREE.MeshStandardMaterial({ color: 0x7f8c8d, metalness: 0.9 });
        const hvacDuct = new THREE.Mesh(ductGeo, ductMat);
        hvacDuct.position.set(-6, 7.2, -3);
        group.add(hvacDuct);

        // 8. Create Hotspot Markers
        HOTSPOT_DATA.forEach(data => {
            const hsGroup = new THREE.Group();
            hsGroup.position.set(data.pos.x, data.pos.y, data.pos.z);

            // Glowing sphere marker
            const sphereGeo = new THREE.SphereGeometry(0.5, 16, 16);
            const sphereMat = new THREE.MeshBasicMaterial({ color: 0xe74c3c });
            const sphere = new THREE.Mesh(sphereGeo, sphereMat);
            hsGroup.add(sphere);

            // Pulsing ring
            const ringGeo = new THREE.RingGeometry(0.6, 0.8, 24);
            const ringMat = new THREE.MeshBasicMaterial({ color: 0xf39c12, side: THREE.DoubleSide });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = Math.PI / 2;
            hsGroup.add(ring);

            hsGroup.userData = data;
            group.add(hsGroup);
            hotspots.push(hsGroup);
        });

        scene.add(group);
    }

    function setupControls() {
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        const dom = renderer.domElement;

        dom.addEventListener('mousedown', e => {
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });

        dom.addEventListener('mousemove', e => {
            if (!isDragging) return;

            const deltaMove = {
                x: e.clientX - previousMousePosition.x,
                y: e.clientY - previousMousePosition.y
            };

            cameraAngle -= deltaMove.x * 0.005;
            const radius = 28;
            camera.position.x = currentLookAt.x + radius * Math.sin(cameraAngle);
            camera.position.z = currentLookAt.z + radius * Math.cos(cameraAngle);
            camera.lookAt(currentLookAt.x, currentLookAt.y, currentLookAt.z);

            previousMousePosition = { x: e.clientX, y: e.clientY };
        });

        dom.addEventListener('mouseup', () => { isDragging = false; });
        dom.addEventListener('mouseleave', () => { isDragging = false; });

        // Wheel Zoom
        dom.addEventListener('wheel', e => {
            e.preventDefault();
            camera.fov += e.deltaY * 0.05;
            camera.fov = Math.max(20, Math.min(75, camera.fov));
            camera.updateProjectionMatrix();
        });

        // Click on 3D Hotspot Raycasting
        const raycaster = new THREE.Raycaster();
        const mouseVec = new THREE.Vector2();

        dom.addEventListener('click', e => {
            const rect = dom.getBoundingClientRect();
            mouseVec.x = ((e.clientX - rect.left) / dom.clientWidth) * 2 - 1;
            mouseVec.y = -((e.clientY - rect.top) / dom.clientHeight) * 2 + 1;

            raycaster.setFromCamera(mouseVec, camera);
            const intersects = raycaster.intersectObjects(hotspots, true);

            if (intersects.length > 0) {
                let obj = intersects[0].object;
                while (obj && !obj.userData.id && obj.parent) {
                    obj = obj.parent;
                }
                if (obj && obj.userData.id) {
                    selectHotspot(obj.userData.id);
                }
            }
        });
    }

    function animate() {
        animationFrameId = requestAnimationFrame(animate);

        // Smooth Camera Transition to target pos & lookAt
        if (targetCameraPos) {
            camera.position.x += (targetCameraPos.x - camera.position.x) * 0.08;
            camera.position.y += (targetCameraPos.y - camera.position.y) * 0.08;
            camera.position.z += (targetCameraPos.z - camera.position.z) * 0.08;
        }

        if (targetLookAt) {
            currentLookAt.x += (targetLookAt.x - currentLookAt.x) * 0.08;
            currentLookAt.y += (targetLookAt.y - currentLookAt.y) * 0.08;
            currentLookAt.z += (targetLookAt.z - currentLookAt.z) * 0.08;
            camera.lookAt(currentLookAt.x, currentLookAt.y, currentLookAt.z);
        }

        // Pulse Hotspots
        const time = Date.now() * 0.003;
        hotspots.forEach(hs => {
            hs.scale.setScalar(1 + Math.sin(time) * 0.15);
        });

        renderer.render(scene, camera);
    }

    function selectHotspot(id) {
        const item = HOTSPOT_DATA.find(h => h.id === id);
        if (!item) return;

        activeHotspotId = id;
        targetCameraPos = item.camPos;
        targetLookAt = item.lookAt;

        if (typeof onSelectCallback === 'function') {
            onSelectCallback(item);
        }
    }

    function onWindowResize() {
        if (!container || !camera || !renderer) return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    function setupCanvasFallback() {
        container.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#fff; text-align:center; padding:20px;">
                <h3 style="color:var(--accent);">📐 Sơ Đồ Khảo Sát Thực Địa 3D (Ikigai Wellness Center)</h3>
                <p style="font-size:13px; max-width:400px; margin-top:10px;">Vui lòng kết nối mạng hoặc bật WebGL để tương tác mô hình 3D xoay 360°.</p>
            </div>
        `;
    }

    return {
        init: init,
        selectHotspot: selectHotspot,
        getHotspots: function () { return HOTSPOT_DATA; }
    };
})();
