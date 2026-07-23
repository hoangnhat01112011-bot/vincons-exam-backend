/**
 * REVIT BIM MEP 3D SYSTEM BUILDER & ELEMENT PARAMETER INSPECTOR
 * Based on CAD drawing: "1 Cap dien nha IKIGAI.dwg"
 * Vincons Exam App - BVTK Cụm 3 (Ikigai Wellness Center)
 */

window.RevitMEP = (function () {
    let activeSystem = 'all';
    let mepElements = [];
    let selectedElement = null;
    let onInspectCallback = null;

    const SYSTEM_DEFINITIONS = {
        all: { id: 'all', name: 'Tất Cả Các Hệ M&E', color: '#ffffff' },
        power: { id: 'power', name: '⚡ Cấp Điện & Tủ MDB', color: '#00a8ff', hex: 0x00a8ff },
        lighting: { id: 'lighting', name: '💡 Chiếu Sáng & Đèn Thả', color: '#f1c40f', hex: 0xf1c40f },
        low_voltage: { id: 'low_voltage', name: '🔌 Điện Nhẹ & Ổ Cắm', color: '#9b59b6', hex: 0x9b59b6 },
        hvac_fire: { id: 'hvac_fire', name: '❄️ HVAC & Báo Cháy', color: '#e67e22', hex: 0xe67e22 }
    };

    // Detailed BIM Parameter Database from CAD "1 Cap dien nha IKIGAI.dwg"
    const MEP_BIM_DATABASE = [
        // ⚡ POWER SYSTEM
        {
            id: 'mdb_cabinet',
            system: 'power',
            family: 'Tủ Điện Tổng MDB 3 Pha 400A',
            category: 'Electrical Equipment',
            size: '800 x 1800 x 400 mm',
            elevation: '+0.00 mm (Cốt sàn kỹ thuật)',
            spec: 'Aptomat tổng MCCB 400A 3P 36kA, vỏ sơn tĩnh điện 1.5mm IP54, tích hợp đồng hồ đo KWh & tủ bù công suất.',
            code: 'MDB-IKIGAI-01',
            location: 'Sàn Kỹ Thuật (Bên Trái)'
        },
        {
            id: 'power_cable_tray',
            system: 'power',
            family: 'Máng Cáp Động Lực (Cable Tray Trunking)',
            category: 'Cable Trays',
            size: '200 x 100 x 1.2 mm',
            elevation: '+4.80 m (Âm trần sảnh)',
            spec: 'Máng cáp tôn mạ kẽm nhúng nóng, đi kèm nắp đậy, ty treo M10 khoảng cách 1.5m/ty.',
            code: 'CT-PWR-200',
            location: 'Sảnh Trung Tâm'
        },
        {
            id: 'main_feeder_cable',
            system: 'power',
            family: 'Tuyến Cáp Động Lực Nguồn Chính (Feeder Cable)',
            category: 'Electrical Conductors',
            size: 'Cu/XLPE/PVC 4x35 + 1x16 mm²',
            elevation: '+4.80 m (Trong máng cáp)',
            spec: 'Cáp đồng chống cháy 0.6/1kV, luồn trong máng cáp từ tủ MDB cấp nguồn cho các tủ DB tầng.',
            code: 'CBL-CU-4X35',
            location: 'Sàn Kỹ Thuật -> Tủ DB'
        },

        // 💡 LIGHTING SYSTEM
        {
            id: 'pendant_light_cluster',
            system: 'lighting',
            family: 'Cụm Đèn Thả Trang Trí Thông Tầng Ikigai',
            category: 'Lighting Fixtures',
            size: 'Phi 450mm - 12 Đèn LED 2700K',
            elevation: '+5.50 m (Thả từ trần mái cong)',
            spec: 'Đèn thả trang trí chao gỗ phong cách Nhật Bản, công suất 12x15W, ánh sáng ấm 2700K, điều khiển Dimmer.',
            code: 'LT-PENDANT-12',
            location: 'Sảnh Đón Tiếp Thông Tầng'
        },
        {
            id: 'downlight_yoga',
            system: 'lighting',
            family: 'Đèn LED Downlight Âm Trần COB',
            category: 'Lighting Fixtures',
            size: 'D110mm - 12W 4000K',
            elevation: '+4.20 m (Trần thạch cao)',
            spec: 'Đèn LED âm trần chỉ số hoàn màu CRI > 90, chống chói mờ, khoét lỗ D90mm.',
            code: 'LT-DL-12W',
            location: 'Phòng Yoga & Phòng Thiền'
        },
        {
            id: 'lighting_conduit',
            system: 'lighting',
            family: 'Ống Gen Luồn Dây Chiếu Sáng PVC',
            category: 'Conduits',
            size: 'D20 mm Chống Cháy',
            elevation: '+4.50 m (Đi âm trần/sàn)',
            spec: 'Ống gen cứng PVC chống cháy D20, luồn dây Cu/PVC 3x2.5mm² cấp nguồn chiếu sáng.',
            code: 'CDT-PVC-D20',
            location: 'Toàn bộ công trình'
        },

        // 🔌 LOW VOLTAGE & SOCKET SYSTEM
        {
            id: 'idf_rack_cabinet',
            system: 'low_voltage',
            family: 'Tủ Mạng Điện Nhẹ IDF 12U',
            category: 'Communication Equipment',
            size: '600 x 600 x 650 mm',
            elevation: '+1.50 m (Tường Sàn KT)',
            spec: 'Tủ rack âm tường chứa Switch PoE 24 Port, ODF quang 12 core, Patch Panel Cat6 & Router Wi-Fi.',
            code: 'IDF-ELV-12U',
            location: 'Phòng Thiền / Sàn Kỹ Thuật'
        },
        {
            id: 'socket_duplex_wall',
            system: 'low_voltage',
            family: 'Ổ Cắm Đôi 3 Chấu Âm Tường 16A',
            category: 'Electrical Receptacles',
            size: '86 x 86 mm (Chuẩn Đô thị Vincons)',
            elevation: '+300 mm (Cốt sàn hoàn thiện)',
            spec: 'Ổ cắm đôi có màng che an toàn, công tắc phụ, mặt che màu trắng cao cấp, đế âm chống cháy.',
            code: 'SKT-DUPLEX-16A',
            location: 'Phòng Thiền / Yoga / Sảnh'
        },
        {
            id: 'cctv_camera_dome',
            system: 'low_voltage',
            family: 'Camera IP Dome Quan Sát 4K AI',
            category: 'Security Systems',
            size: 'D120 x 95 mm',
            elevation: '+3.80 m (Góc trần)',
            spec: 'Camera IP 8MP hồng ngoại 30m, chuẩn nén H.265+, cấp nguồn PoE luồn cáp Cat6 UTP.',
            code: 'CAM-CCTV-4K',
            location: 'Sảnh Trung Tâm'
        },

        // ❄️ HVAC & FIRE ALARM SYSTEM
        {
            id: 'hvac_duct_main',
            system: 'hvac_fire',
            family: 'Đường Ống Gió Cấp Điều Hòa Tôn Mạ Kẽm',
            category: 'Ducts',
            size: '400 x 250 mm (Bọc bảo ôn)',
            elevation: '+6.20 m (Trần mái cong)',
            spec: 'Ống gió tôn mạ kẽm dày 0.75mm bọc cách nhiệt PE foam 25mm, kèm cửa gió khế khuếch tán.',
            code: 'DCT-HVAC-400',
            location: 'Phòng Yoga & Thiền'
        },
        {
            id: 'smoke_detector_addr',
            system: 'hvac_fire',
            family: 'Đầu Báo Khói Quang Địa Chỉ FA',
            category: 'Fire Alarm Devices',
            size: 'D100 x 45 mm',
            elevation: '+4.20 m (Trần thạch cao)',
            spec: 'Đầu báo khói địa chỉ thông minh kết nối loop tủ trung tâm báo cháy, có đèn LED chỉ thị trạng thái.',
            code: 'FA-SMOKE-ADDR',
            location: 'Toàn bộ công trình'
        }
    ];

    function buildRevitMEPElements(threeScene) {
        if (!threeScene) return;

        mepElements = [];
        const mepGroup = new THREE.Group();
        mepGroup.name = 'RevitMEPGroup';

        MEP_BIM_DATABASE.forEach(data => {
            const sysDef = SYSTEM_DEFINITIONS[data.system];
            const matColor = sysDef ? sysDef.hex : 0xffffff;

            let geo, mat, mesh;

            // Render custom 3D MEP Geometry by Family
            if (data.system === 'power') {
                if (data.id === 'mdb_cabinet') {
                    geo = new THREE.BoxGeometry(1.6, 2.4, 0.8);
                } else if (data.id === 'power_cable_tray') {
                    geo = new THREE.BoxGeometry(38, 0.2, 0.6);
                } else {
                    geo = new THREE.CylinderGeometry(0.15, 0.15, 30, 8);
                }
            } else if (data.system === 'lighting') {
                if (data.id === 'pendant_light_cluster') {
                    geo = new THREE.CylinderGeometry(1.5, 0.8, 2, 12);
                } else {
                    geo = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 12);
                }
            } else if (data.system === 'low_voltage') {
                if (data.id === 'idf_rack_cabinet') {
                    geo = new THREE.BoxGeometry(1.2, 1.4, 1.0);
                } else {
                    geo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
                }
            } else if (data.system === 'hvac_fire') {
                if (data.id === 'hvac_duct_main') {
                    geo = new THREE.BoxGeometry(20, 0.6, 0.8);
                } else {
                    geo = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 12);
                }
            }

            if (!geo) geo = new THREE.BoxGeometry(1, 1, 1);

            mat = new THREE.MeshStandardMaterial({
                color: matColor,
                roughness: 0.3,
                metalness: 0.5,
                emissive: matColor,
                emissiveIntensity: 0.2,
                transparent: true,
                opacity: 1.0
            });

            mesh = new THREE.Mesh(geo, mat);

            // Position according to BIM spec
            if (data.id === 'mdb_cabinet') mesh.position.set(-14, 1.2, 0);
            else if (data.id === 'power_cable_tray') mesh.position.set(0, 4.8, -1);
            else if (data.id === 'main_feeder_cable') { mesh.position.set(-7, 4.9, -1); mesh.rotation.z = Math.PI / 2; }
            else if (data.id === 'pendant_light_cluster') mesh.position.set(0, 5.5, 2);
            else if (data.id === 'downlight_yoga') mesh.position.set(-6, 4.3, -3);
            else if (data.id === 'lighting_conduit') { mesh.position.set(0, 4.4, 1); mesh.rotation.z = Math.PI / 2; }
            else if (data.id === 'idf_rack_cabinet') mesh.position.set(6, 1.5, -4.5);
            else if (data.id === 'socket_duplex_wall') mesh.position.set(8, 0.3, -4.8);
            else if (data.id === 'cctv_camera_dome') mesh.position.set(0, 3.8, 7.8);
            else if (data.id === 'hvac_duct_main') mesh.position.set(0, 6.2, -3);
            else if (data.id === 'smoke_detector_addr') mesh.position.set(-6, 4.25, -2);

            mesh.userData = data;
            mepGroup.add(mesh);
            mepElements.push(mesh);
        });

        threeScene.add(mepGroup);
    }

    function setSystemFilter(sysId) {
        activeSystem = sysId;

        mepElements.forEach(mesh => {
            const data = mesh.userData;
            const mat = mesh.material;

            if (sysId === 'all') {
                mat.opacity = 1.0;
                mat.emissiveIntensity = 0.2;
            } else if (data.system === sysId) {
                // Highlight active system
                mat.opacity = 1.0;
                mat.emissiveIntensity = 0.6; // Glowing effect
                mesh.scale.set(1.1, 1.1, 1.1);
            } else {
                // X-Ray Ghosting Mode for inactive systems
                mat.opacity = 0.12;
                mat.emissiveIntensity = 0.0;
                mesh.scale.set(1.0, 1.0, 1.0);
            }
        });
    }

    function inspectElement(elementId) {
        const data = MEP_BIM_DATABASE.find(d => d.id === elementId);
        if (!data) return null;

        selectedElement = data;
        if (typeof onInspectCallback === 'function') {
            onInspectCallback(data);
        }
        return data;
    }

    return {
        SYSTEM_DEFINITIONS: SYSTEM_DEFINITIONS,
        MEP_BIM_DATABASE: MEP_BIM_DATABASE,
        buildRevitMEPElements: buildRevitMEPElements,
        setSystemFilter: setSystemFilter,
        inspectElement: inspectElement,
        setOnInspectCallback: function (cb) { onInspectCallback = cb; }
    };
})();
