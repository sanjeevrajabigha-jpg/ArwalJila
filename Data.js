<script>
    // 1. प्रखंड की लिस्ट (यह फिक्स कर दिया गया है)
    const blockList = [
        "अरवल (Arwal)", "कलेर (Kaler)", "करपी (Karpi)", "कुर्था (Kurtha)", "सोनभद्र वंशी सूर्यपुर"
    ];

    // 2. पंचायत की लिस्ट (यहाँ अपना पहले वाला असली डेटा डाल दें)
    const panchayatList = [
        "ऐयरा", "बैदराबाद", "भदासा", "फखरपुर", "हैबतपुर" 
        // <-- (अपना पूरा 65 पंचायत का नाम यहाँ कॉमा लगाकर पेस्ट करें)
    ];

    // 3. गाँव की लिस्ट (यहाँ अपना पहले वाला असली डेटा डाल दें)
    const villageList = [
        "अरवल", "करपी", "कलेर", "कुर्था", "सोनभद्र", "अब्गिल्ला" 
        // <-- (अपना पूरा 335 गाँव का नाम यहाँ कॉमा लगाकर पेस्ट करें)
    ];


    // ---------------------------------------------------------
    // नीचे का कोड पॉप-अप खोलने और बंद करने के लिए है (इसे मत बदलना)
    // ---------------------------------------------------------
    function openModal(type) {
        const modal = document.getElementById('dataModal');
        const container = document.getElementById('listContainer');
        const title = document.getElementById('modalTitle');
        const header = document.getElementById('modalHeader');
        
        container.innerHTML = ''; // पुराना डेटा साफ़ करें

        if (type === 'block') {
            title.innerText = "अरवल जिले के प्रखंड";
            header.className = "p-4 flex justify-between items-center text-white bg-blue-600";
            blockList.forEach(function(item) {
                container.innerHTML += '<div class="p-3 mb-2 bg-white border border-gray-200 rounded shadow-sm">🏢 ' + item + '</div>';
            });
        } 
        else if (type === 'panchayat') {
            title.innerText = "अरवल जिले की पंचायतें";
            header.className = "p-4 flex justify-between items-center text-white bg-green-600";
            panchayatList.forEach(function(item) {
                container.innerHTML += '<div class="p-3 mb-2 bg-white border border-gray-200 rounded shadow-sm">👥 ' + item + '</div>';
            });
        } 
        else if (type === 'village') {
            title.innerText = "अरवल जिले के गाँव";
            header.className = "p-4 flex justify-between items-center text-white bg-orange-600";
            villageList.forEach(function(item) {
                container.innerHTML += '<div class="p-3 mb-2 bg-white border border-gray-200 rounded shadow-sm">🏡 ' + item + '</div>';
            });
        }

        modal.classList.remove('hidden'); // पॉप-अप दिखाएँ
    }

    function closeModal() {
        document.getElementById('dataModal').classList.add('hidden'); // पॉप-अप छुपाएँ
    }
</script>
