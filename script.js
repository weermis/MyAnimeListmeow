const animeList = [
    { title: 'Chainsaw Man', image: 'img/csm.jpg', category: 'Action', video: 'chainsaw_man.mp4' },
    { title: 'Haikyu!! 2nd Season', image: 'img/haik.jpg', category: 'Sports', video: 'haikyu_2nd_season.mp4' },
    { title: 'Jujutsu Kaisen (TV)', image: 'img/jjk1.jpg', category: 'Action', video: 'jujutsu_kaisen.mp4' },
    { title: 'Jujutsu Kaisen (TV) 2nd Season', image: 'img/jjk2.jpg', category: 'Action', video: 'jujutsu_kaisen_2nd_season.mp4' },
    { title: 'Kuroko no Basket 1', image: 'img/knb1.jpg', category: 'Sports', video: 'kuroko_no_basket_3.mp4' },
    { title: 'Kuroko no Basket 2', image: 'img/knb2.jpg', category: 'Sports', video: 'kuroko_no_basket_3.mp4' },
    { title: 'Kuroko no Basket 3', image: 'img/knb3.jpg', category: 'Sports', video: 'kuroko_no_basket_3.mp4' },
    { title: 'Kuroko no Basket film', image: 'img/knb4.jpg', category: 'Sports', video: 'kuroko_no_basket_3.mp4' },
    { title: 'Mashle', image: 'img/mash.jpg', category: 'Action', video: 'mashle.mp4' },
    { title: 'Mashle Season 2', image: 'img/mash2.jpg', category: 'Action', video: 'mashle_season_2.mp4' },
    { title: 'Ore dake Level Up na Ken', image: '/img/solo.jpg', category: 'Action', video: 'ore_dake_level_up_na_ken.mp4' },
    { title: 'Pokemon', image: 'img/p1.jpg', category: 'Adventure', video: 'pokemon.mp4' },
    { title: 'Pokemon (2023)', image: 'img/p2.jpg', category: 'Adventure', video: 'pokemon_2023.mp4' },
    { title: 'Pokemon Advanced Generation', image: 'img/p3.jpg', category: 'Adventure', video: 'pokemon_advanced_generation.mp4' },
    { title: 'Pokemon Best Wishes!', image: 'img/p4.jpg', category: 'Adventure', video: 'pokemon_best_wishes.mp4' },
    { title: 'Pokemon Best Wishes! Season 2', image: 'img/p5.jpg', category: 'Adventure', video: 'pokemon_best_wishes_season_2.mp4' },
    { title: 'Pokemon Best Wishes! Season 2: Decolora Adventure', image: '/img/p6.jpg', category: 'Adventure', video: 'pokemon_best_wishes_season_2_decolora_adventure.mp4' },
    { title: 'Pokemon Diamond & Pearl', image: 'img/p7.jpg', category: 'Adventure', video: 'pokemon_diamond_and_pearl.mp4' },
    { title: 'Pokemon Housoukyoku', image: 'img/p8.jpg', category: 'Adventure', video: 'pokemon_housoukyoku.mp4' },
    { title: 'Pokemon Journeys: The Series', image: 'img/p9.jpg', category: 'Adventure', video: 'pokemon_journeys.mp4' },
    { title: 'Pokemon Movie 01: Mewtwo no Gyakushuu', image: 'img/p10.jpg', category: 'Movie', video: 'pokemon_movie_01_mewtwo_no_gyakushuu.mp4' },
    { title: 'Pokemon Movie 02: Maboroshi no Pokemon Lugia Bakutan', image: 'img/p11.jpg', category: 'Movie', video: 'pokemon_movie_02_maboroshi_no_pokemon_lugia_bakutan.mp4' },
    { title: 'Pokemon Sun & Moon', image: 'img/p12.jpg', category: 'Adventure', video: 'pokemon_sun_and_moon.mp4' },
    { title: 'Pokemon XY', image: 'img/p13.jpg', category: 'Adventure', video: 'pokemon_xy.mp4' },
    { title: 'Pokemon XY&Z', image: 'img/p14.jpg', category: 'Adventure', video: 'pokemon_xy_and_z.mp4' },
    { title: 'Pokemon: Mezase Pokemon Master', image: 'img/p15.jpg', category: 'Adventure', video: 'pokemon_mezase_pokemon_master.mp4' },
    { title: 'Pokemon: The Origin', image: 'img/p16.jpg', category: 'Adventure', video: 'pokemon_the_origin.mp4' },
    { title: 'Shingeki no Kyojin', image: 'img/aot1.jpg', category: 'Action', video: 'shingeki_no_kyojin.mp4' },
    { title: 'Shingeki no Kyojin 3: Part 2', image: 'img/aot2.jpg', category: 'Action', video: 'shingeki_no_kyojin_part_2.mp4' },
    { title: 'Shingeki no Kyojin 4: The Final Season', image: 'img/aot3.jpg', category: 'Action', video: 'shingeki_no_kyojin_final_season.mp4' },
    { title: 'Shingeki no Kyojin 4: The Final Season Part 2', image: 'img/aot4.jpg', category: 'Action', video: 'shingeki_no_kyojin_final_season_part_2.mp4' },
    { title: 'Shingeki no Kyojin 4: The Final Season Part 3', image: 'img/aot5.jpg', category: 'Action', video: 'shingeki_no_kyojin_final_season_part_3.mp4' },
    { title: 'Shingeki no Kyojin Movie 1: Guren no Yumiya', image: 'img/aot6.jpg', category: 'Movie', video: 'shingeki_no_kyojin_movie_1_guren_no_yumiya.mp4' },
    { title: 'Shingeki no Kyojin Season 2', image: 'img/aot7.jpg', category: 'Action', video: 'shingeki_no_kyojin_season_2.mp4' },
    { title: 'Shingeki no Kyojin Season 3', image: 'img/aot8.jpg', category: 'Action', video: 'shingeki_no_kyojin_season_3.mp4' },
    { title: 'Blue Lock', image: 'img/bl.jpg', category: 'Sports', video: 'blue_lock.mp4' },
    { title: 'Haikyuu!!', image: 'img/haik2.jpg', category: 'Sports', video: 'haikyuu.mp4' },
    { title: 'Hunter X Hunter 2011', image: 'img/hxh.jpg', category: 'Adventure', video: 'hunter_x_hunter_2011.mp4' },
    { title: 'Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san', image: 'img/alya.jpg', category: 'Comedy', video: 'tokidoki_bosotto_russia_go_de_dereru_tonari_no_alya_san.mp4' },
    { title: 'Oshi no Ko', image: 'img/oshi.jpg', category: 'Drama', video: 'oshi_no_ko.mp4' },
    { title: 'High School DxD', image: 'img/dxd.jpg', category: 'Fantasy', video: 'high_school_dxd.mp4' },
    { title: 'Shigatsu wa Kimi no Uso', image: 'img/yl.jpg', category: 'Drama', video: 'shigatsu_wa_kimi_no_uso.mp4' },
    { title: 'Bleach', image: 'img/bleach.jpg', category: 'Action', video: 'bleach.mp4' },
];


function displayAnime(animeArray) {
    const animeGrid = document.getElementById('animeGrid');
    animeGrid.innerHTML = ''; // Clear previous content

    animeArray.forEach(anime => {
        const card = document.createElement('div');
        card.classList.add('anime-card');
        card.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <h3>${anime.title}</h3>
        `;
        
        // Change to redirect to the corresponding subpage
        card.onclick = () => {
            const titleFormatted = anime.title.toLowerCase().replace(/ /g, "_"); // Format the title for the URL
            window.location.href = `subpages/${titleFormatted}.html`; // Redirect to the subpage
        };

        animeGrid.appendChild(card);
    });
}




function openModal(videoSrc) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('animeVideo');
    const source = document.getElementById('videoSource');
    source.src = videoSrc;
    video.load();
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('animeVideo');
    video.pause();
    modal.style.display = 'none';
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredAnime = animeList.filter(anime => anime.title.toLowerCase().includes(searchValue));
    displayAnime(filteredAnime);
});

document.getElementById('categorySelect').addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    const filteredAnime = selectedCategory === 'All' ? animeList : animeList.filter(anime => anime.category === selectedCategory);
    displayAnime(filteredAnime);
});

// Initial display of all anime
displayAnime(animeList);
