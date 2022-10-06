const products = [
  {
    name: "Tanaman Kentang",
    image: "/images/1.png",
    description:
      "Kentang menurut sejarahnya merupakan tanaman yang berasal dari Amerika Tengah. Hasil utama dari tanaman kentang ialah umbi. Tanaman kentang merupakan tanaman yang hidup dan berproduksi di daerah subtropis atau daerah dataran tinggi seperti pegunungan. Hasil olahan tanaman kentang selain sebagai bahan pokok berupa umbi ialah sebagai bahan baku pembuat pati, sebagai salah satu bahan pembuat cat, pembuat glukosa dan lain sebagainya. Penyebaran tanaman kentang di Indonesia meliputi daera-daerah seperti Jawa Timur, Jawa Barat, Jawa Tengah, Aceh, Sumtera Selatan, Tanah Karo dan lain sebagainya. Menurut Wattimena dalam Suwarno (2008:1) kentang merupakan salah satu pangan utama dunia setelah padi, gandum, dan jagung.",
    price: 8900,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Kacang Tanah",
    image: "/images/3.png",
    description:
      "Kacang tanah merupakan salah satu tanaman leguminose yang sangat berperan penting bagi kebutuhan pangan, selain itu memiliki nilai ekonomi yang tinggi sehingga banyak yang menjadikan kacang tanah selain bahan pangan juga sebagai bahan industri. Hal ini karena kandungan protein yang terdapat di dalamnya. Menurut Murrinie (2010) sebagai bahan pangan dan makanan yang bergizi tinggi, kacang tanah mengandung lemak 40 – 50%, protein 27%, karbohidrat dan vitamin.",
    price: 5990,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Tanaman Kaktus",
    image: "/images/2.png",
    description:
      "Kaktus dapat tumbuh pada waktu yang lama tanpa air. Kaktus biasa ditemukan di daerah-daerah yang kering (gurun). Kata jamak untuk kaktus adalah kakti. Kaktus memiliki akar yang panjang untuk mencari air dan memperlebar penyerapan air dalam tanah. Air yang diserap kaktus disimpan dalam ruang di batangnya. Kaktus juga memiliki daun yang berubah bentuk menjadi duri sehingga dapat mengurangi penguapan air lewat daun. Oleh sebab itu, kaktus dapat tumbuh pada waktu yang lama tanpa air.",
    price: 9200,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Ubi Jalar",
    image: "/images/7.png",
    description:
      "Ubi jalar merupakan tumbuhan semak bercabang yang memiliki daun berbentuk segitiga yang berlekuk-lekuk dengan bunga berbentuk payung ini, memiliki bentuk umbi yang besar, rasanya manis, dan berakar bongol. Ubi jalar dikonsumsi sebagai makanan tambahan atau samping-an, kecuali di Irian Jaya dan Maluku, ubi jalar digunakan sebagai ma-kanan pokok. Ubi jalar di kawasan dataran tinggi Jayawijaya merupakan sumber utama karbohidrat dan memenuhi hampir 90% kebutuhan kalori penduduk.",
    price: 9000,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "Keladi Hias",
    image: "/images/4.png",
    description:
      "Keladi atau caladium sebenarnya adalah tanaman hias asal Amerika Tengah dan Amerika Selatan. Namun, seiring dengan berjalannya waktu, keladi mengalami banyak perubahan dan telah dinaturalisasi oleh sejumlah negara tropis, tak terkecuali Indonesia. Caladium adalah jenis tanaman dari family Araceae atau keluarga talas-talasan yang bisa tumbuh pada area terbuka dan memiliki tinggi sekitar 40 sampai 90 cm dan lebar daun sekitar 15 hingga 35 cm. Ciri utama dari tanaman hias keladi adalah bentuk daunnya menyerupai simbol hati. Tidak hanya itu, daun keladi juga dikenal licin.",
    price: 39000,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "Lidah Mertua",
    image: "/images/5.png",
    description:
      "ansevieria atau lidah mertua adalah marga tanaman hias yang cukup populer sebagai penghias bagian dalam rumah karena tanaman ini dapat tumbuh dalam kondisi yang sedikit air dan cahaya matahari. Sansevieria memiliki daun keras, sukulen, tegak, dengan ujung meruncing. Sanseviera dikenal dengan sebutan tanaman lidah mertua karena bentuknya yang tajam. Sanseviera tak hanya sebagai tanaman hias, tapi juga memiliki manfaat untuk menyuburkan rambut, mengobati diabetes, wasir, hingga kanker ganas. Sementara seratnya digunakan sebagai bahan pakaian. Di Jepang, Sanseviera digunakan untuk menghilangkan bau perabotan rumah di ruangan.",
    price: 49000,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Tanaman Pakis",
    image: "/images/6.png",
    description:
      "Tumbuhan paku, paku-pakuan, atau pakis-pakisan adalah sekelompok tumbuhan dengan sistem pembuluh sejati (Tracheophyta) tetapi tidak pernah menghasilkan biji untuk reproduksi seksualnya. Alih-alih biji, kelompok tumbuhan ini melepaskan spora sebagai alat penyebarluasan dan perbanyakannya, menyerupai kelompok organisme seperti lumut dan fungi. Tumbuhan paku tersebar di seluruh bagian dunia, kecuali daerah bersalju abadi dan lautan, dengan kecenderungan ditemukan tumbuh di tempat-tempat yang tidak subur untuk pertanian. Total spesies yang diketahui sekitar 12.000,[2] dengan perkiraan 1.300[3] sampai 3000 lebih[4] spesies di antaranya tumbuh di kawasan Malesia (yang mencakup Indonesia).",
    price: 75000,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },{
    name: "Tanaman Pucuk Merah",
    image: "/images/8.png",
    description:
      "Pucuk merah atau daun pucuk merah (Syzygium myrtifolium) adalah spesies tumbuhan yang dikenal sebagai tanaman hias yang berasal dari genus Syzygium.Warna tunas daun yang baru muncul memiliki warna merah menyala sehingga tumbuhan ini memiliki sebutan Pucuk Merah. Warna daun akan berubah perlahan menjadi hijau seiring berjalannya waktu. Pucuk merah merupakan sejenis tanaman perdu yang biasanya dijadikan tanaman hias di pekarangan rumah, perkantoran dan sebagainya serta masih termasuk ke dalam family yang sama dengan tanaman cengkih. Bila diperhatikan, bentuk tajuk dan daunnya pun sangat menyerupai tanaman cengkih.Tumbuhan ini merupakan tanaman asli dari Bangladesh, Borneo, Jawa, semenanjung Malaya, Myanmar, Filipina, Sumatra, dan Thailand.",
    price: 4900,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },{
    name: "Tanaman Sorgum",
    image: "/images/10.png",
    description:
      "Sorgum merupakan tanaman serealia yang dapat tumbuh pada berbagai keadaan lingkungan sehingga potensial dikembangkan, khususnya pada lahan marginal beriklim kering di Indonesia. Keunggulan sorgum terletak pada daya adaptasinya yang luas, toleran terhadap kekeringan, produktivitas tinggi, dan lebih tahan terhadap hama dan penyakit dibandingkan dengan tanaman pangan lainnya. Selain budidaya yang mudah, sorgum mempunyai manfaat yang luas, antara lain untuk pakan, pangan,dan bahan industry. Tanaman sorgum sekeluarga dengan tanaman serealia lainnya seperti padi, jagung, hanjeli dan gandum, bahkan tanaman lain seperti bambu dan tebu.",
    price: 5000,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },{
    name: "Tanaman Jagung",
    image: "/images/9.png",
    description:
      "Tanaman jagung merupakan tanaman yang berasal dari Amerika. Tanaman ini memiliki hasil utama berupa biji. Di indonesia jagung diberdayakan untuk memenuhi berbagai keperluan baik pangan maupun non pangan. Sebagai bahan pangan beberapa hasil olahannya meliputi: pati, tepung jagung, snack, berondong (pop corn), jenang, nasi jagung, sirup jagung dan lain sebagainya. Sebagai bahan non pangan beberapa manfaat dari jagung adalah sebagai berikut, misalnya digunakan sebagai bahan pakan ternak, pupuk kompos, bahan pembuat kertas dan kayu bakar. ",
    price: 6000,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },
];

export default products;
