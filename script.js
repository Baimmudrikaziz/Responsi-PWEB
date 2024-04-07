// Data departemen pemerintah beserta tombol
var departments = [
    { 
        name: "Departemen Dalam Negeri", 
        description: "Bertanggung jawab atas urusan dalam negeri, administrasi pemerintahan, dan keamanan dalam negeri."
    },
    { 
        name: "Departemen Luar Negeri", 
        description: "Bertanggung jawab atas hubungan luar negeri dan diplomasi internasional."
    },
    { 
        name: "Departemen Keuangan", 
        description: "Bertanggung jawab atas kebijakan keuangan negara dan manajemen anggaran."
    },
    { 
        name: "Departemen Pertahanan", 
        description: "Bertanggung jawab atas pertahanan negara dan kekuatan militer."
    }
];

// Fungsi untuk menambahkan departemen beserta tombol ke halaman
function addDepartmentsToPage() {
    var container = document.getElementById('departments-container');
    departments.forEach(function(department) {
        var departmentDiv = document.createElement('div');
        departmentDiv.classList.add('col-4');
        departmentDiv.innerHTML = '<div class="icon"><i class="fa-solid fa-building"></i></div>' +
                                   '<h4>' + department.name + '</h4>' +
                                   '<p>' + department.description + '</p>' +
                                   '<button onclick="redirectToDepartment(\'' + department.name + '\')">Klik untuk Informasi Lebih Lanjut</button>';
        container.appendChild(departmentDiv);
    });
}

// Fungsi untuk mengarahkan pengguna ke halaman departemen yang sesuai
function redirectToDepartment(departmentName) {
    // Membuat peta yang memetakan nama departemen ke nama file halaman departemen
    var departmentPageMap = {
        "Departemen Dalam Negeri": "departmen_dalam_negri.html",
        "Departemen Luar Negeri": "departemen_luar_negri.html",
        "Departemen Keuangan": "departemen_keuangan.html",
        "Departemen Pertahanan": "departemen_pertahanan.html"
    };

    // Mendapatkan nama file halaman departemen berdasarkan nama departemen
    var departmentPage = departmentPageMap[departmentName];

    // Arahkan pengguna ke halaman departemen yang sesuai
    if (departmentPage) {
        window.location.href = departmentPage;
    } else {
        alert('Halaman untuk departemen ' + departmentName + ' belum tersedia.');
    }
}

// Memanggil fungsi untuk menambahkan departemen ke halaman saat halaman dimuat
window.onload = addDepartmentsToPage;
