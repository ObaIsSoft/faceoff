
const MusicPlayer = {
    tracks: [
        { title: 'Addicted', artist: 'Rema', src: 'rema-addicted.mp3', duration: '3:24' },
        { title: 'Cudi Zone', artist: 'Kid Cudi', src: 'public/assets/music/cudi-zone.mp3', duration: '3:52' },
        { title: 'King Sunny Ade', artist: 'KSA', src: 'public/assets/music/king-sunny-ade.mp3', duration: '4:15' }
    ],
    state: {
        currentTrack: 0,
        isPlaying: false,
        isExpanded: false
    },
    audio: null,
    el: null,

    init() {
        if (this.el) return; // Prevent double init
        
        this.audio = new Audio();
        this.audio.loop = false;
        
        const savedTime = localStorage.getItem('faceoff_music_time');
        const savedTrack = localStorage.getItem('faceoff_music_track');
        if (savedTrack !== null) this.state.currentTrack = parseInt(savedTrack);
        
        this.loadTrack(this.state.currentTrack);
        if (savedTime) this.audio.currentTime = parseFloat(savedTime);

        this.render();
        this.setupEvents();
        
        setInterval(() => {
            if (this.state.isPlaying) {
                localStorage.setItem('faceoff_music_time', this.audio.currentTime);
                localStorage.setItem('faceoff_music_track', this.state.currentTrack);
            }
        }, 1000);
    },

    loadTrack(index) {
        this.state.currentTrack = index;
        const track = this.tracks[index];
        this.audio.src = track.src;
        if (this.el) {
            this.el.querySelector('.player-title').textContent = track.title;
            this.el.querySelector('.player-artist').textContent = track.artist;
            this.updateTracklistActive();
        }
    },

    render() {
        const playerDiv = document.createElement('div');
        playerDiv.id = 'music-player';
        playerDiv.className = 'music-player-pill hidden';
        playerDiv.innerHTML = `
            <div class="player-main">
                <div class="player-content" id="player-expand-trigger">
                    <div class="player-visuals">
                        <div class="waveform">
                            <span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                    <div class="player-info">
                        <span class="player-title">${this.tracks[this.state.currentTrack].title}</span>
                        <span class="player-artist">${this.tracks[this.state.currentTrack].artist}</span>
                    </div>
                </div>
                <div class="player-controls">
                    <button class="p-nav-btn" id="p-prev">
                        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M8 1v8L2 5z" fill="currentColor"/></svg>
                    </button>
                    <button class="player-toggle">
                        <svg class="play-icon" width="12" height="14" viewBox="0 0 12 14"><path d="M2 1v12l9-6z" fill="currentColor"/></svg>
                        <svg class="pause-icon hidden" width="12" height="14" viewBox="0 0 12 14"><rect x="2" y="1" width="3" height="12" fill="currentColor"/><rect x="7" y="1" width="3" height="12" fill="currentColor"/></svg>
                    </button>
                    <button class="p-nav-btn" id="p-next">
                        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 1v8l6-4z" fill="currentColor"/></svg>
                    </button>
                </div>
            </div>
            <div class="player-tracklist">
                <div class="tl-header">SELECT TRACK</div>
                <div class="tl-items">
                    ${this.tracks.map((t, i) => `
                        <div class="tl-item ${i === this.state.currentTrack ? 'active' : ''}" data-index="${i}">
                            <span class="tl-name">${t.title}</span>
                            <span class="tl-artist">${t.artist}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        document.body.appendChild(playerDiv);
        this.el = playerDiv;
    },

    setupEvents() {
        const toggleBtn = this.el.querySelector('.player-toggle');
        const trigger = this.el.querySelector('#player-expand-trigger');
        const nextBtn = this.el.querySelector('#p-next');
        const prevBtn = this.el.querySelector('#p-prev');

        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggle();
        });

        trigger.addEventListener('click', () => {
            this.state.isExpanded = !this.state.isExpanded;
            this.el.classList.toggle('is-expanded', this.state.isExpanded);
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.next();
        });

        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.prev();
        });

        this.el.querySelectorAll('.tl-item').forEach(item => {
            item.addEventListener('click', () => {
                this.loadTrack(parseInt(item.dataset.index));
                this.audio.play();
            });
        });

        this.audio.addEventListener('play', () => {
            this.state.isPlaying = true;
            this.el.classList.add('is-playing');
            this.el.querySelector('.play-icon').classList.add('hidden');
            this.el.querySelector('.pause-icon').classList.remove('hidden');
            localStorage.setItem('faceoff_music_playing', 'true');
        });

        this.audio.addEventListener('pause', () => {
            this.state.isPlaying = false;
            this.el.classList.remove('is-playing');
            this.el.querySelector('.play-icon').classList.remove('hidden');
            this.el.querySelector('.pause-icon').classList.add('hidden');
            localStorage.setItem('faceoff_music_playing', 'false');
        });

        this.audio.addEventListener('ended', () => this.next());
    },

    toggle() {
        if (this.audio.paused) {
            this.audio.play().catch(() => {});
        } else {
            this.audio.pause();
        }
    },

    next() {
        let next = this.state.currentTrack + 1;
        if (next >= this.tracks.length) next = 0;
        this.loadTrack(next);
        this.audio.play();
    },

    prev() {
        let prev = this.state.currentTrack - 1;
        if (prev < 0) prev = this.tracks.length - 1;
        this.loadTrack(prev);
        this.audio.play();
    },

    updateTracklistActive() {
        this.el.querySelectorAll('.tl-item').forEach((item, i) => {
            item.classList.toggle('active', i === this.state.currentTrack);
        });
    },

    show() {
        if (!this.el) {
            this.init(); // Ensure initialization if called early
        }
        if (!this.el) return;
        
        this.el.classList.remove('hidden');
        
        // Auto-play only if it was previously playing or if the user specifically clicked play
        const wasPlaying = localStorage.getItem('faceoff_music_playing') === 'true';
        if (wasPlaying) {
            this.audio.play().catch(() => {
                // Autoplay might be blocked, that's fine
                console.log('Autoplay blocked by browser policy');
            });
        }
    },

    hide() {
        if (!this.el) return;
        this.el.classList.add('hidden');
        this.audio.pause();
    }
};

window.MusicPlayer = MusicPlayer;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => MusicPlayer.init());
} else {
    MusicPlayer.init();
}
