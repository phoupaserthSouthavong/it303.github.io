const softwareData = [
  {
    name: "Re-Loader 2.6",
    description: "activate Windows/Office",
    link: "downloads/Re-Loader_2.6-master.iso"
  },

  {
    name: "AActv4.3.2Portable",
    description: "activate Windows/Office",
    link: "downloads/AActv4.3.2Portable.iso"
  },
  {
    name: "KMS.Tools.Lite.Portable.30.12.2024",
    description: "activate Windows/Office",
    link: "downloads/KMS.Tools.Lite.Portable.30.12.2024.iso"
  },
  {
    name: "KMS.Tools.Portable.08.03.2025",
    description: "activate Windows/Office",
    link: "downloads/KMS.Tools.Portable.08.03.2025.iso"
  },
  {
    name: "KMSofflinev2.4.7",
    description: "activate Windows/Office",
    link: "downloads/KMSofflinev2.4.7.iso"
  },
  {
    name: "Office2013-2024C2RInstallv7.7.7.7r26",
    description: "activate Windows/Office",
    link: "downloads/Office2013-2024C2RInstallv7.7.7.7r26.iso"
  },
  {
    name: "OfficeInstaller+v1.26",
    description: "activate Windows/Office",
    link: "downloads/OfficeInstaller+v1.26.iso"
  },
  {
    name: "W10DigitalActivationProgramv1.5.5.4",
    description: "activate Windows/Office",
    link: "downloads/W10DigitalActivationProgramv1.5.5.4.iso"
  },
  {
    name: "KMS VL ALL AIO",
    description: "activate Windows/Office by KMS VL ALL AIO",
    link: "downloads/KMS_VL_ALL_AIO.iso"
  },
  {
    name: "KMSAuto 1.7.2",
    description: "activate Windows/Office by KMSAuto",
    link: "downloads/KMSAuto_1.7.2.iso"
  },
  {
    name: "AMT Emulator v0.9.2 by PainteR",
    description: "Emulator Adobe Creative Cloud ສຳລັບ Windows 7, 8, 10, 11 ແລະ Server ທັງໝົດ",
    link: "downloads/AMT_Emulator_v0.9.2_by_PainteR.iso"
  },
  {
    name: "Fix Printer Error 11b",
    description: "ໄຟລ .reg ແກ້ປີ້ນເຕີ້ Error 11b ສຳລັບ Windows 7, 8, 10, 11",
    link: "downloads/fix_printer_error_11b.reg"
  },
  {
    name: "IDM v6.42 Build 35",
    description: "Internet Download Manager 6.42 Build 35",
    link: "downloads/Internet_Download_Manager_IDM_v6.42_Build_35.iso"
  },

  {
    name: "Phetsarath.ttf",
    description: "ຟອນພາສາລາວ Phetsarath",
    link: "downloads/phetsarath.ttf"
  },
  {
    name: "PhetsarathIT.ttf",
    description: "ຟອນພາສາລາວ Phetsarath IT",
    link: "downloads/PhetsarathIT.ttf"
  },

  {
    name: "Saysettha Font",
    description: "ຟອນພາສາລາວ Saysettha",
    link: "downloads/saysettha_ot.ttf"
  },
  {
    name: "Visual C++ Runtimes Nov 2024",
    description: "ລວມ Visual C++ Runtimes ທັງໝົດ ສຳລັບ Windows 7, 8, 10, 11 ແລະ Server ທັງໝົດ",
    link: "downloads/Visual-C-Runtimes-All-in-One-Nov-2024.zip"
  }
];


const listContainer = document.getElementById("softwareList");

softwareData.forEach(software => {
  const item = document.createElement("div");
  item.className = "software-item";

  item.innerHTML = `
      <h2>${software.name}</h2>
      <p>${software.description}</p>
      <a class="download-btn" href="${software.link}" target="_blank">ດາວໂຫຼດ</a>
    `;

  listContainer.appendChild(item);
});