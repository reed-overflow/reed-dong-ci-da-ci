// 初始化
function init() {
		if (!createjs.Sound.initializeDefaultPlugins()) {
			return;
		}

		var assetsPath = "./media/";
		var sounds = [
			{src: "ting.wav", id: "ting"},
			{src: "ting.wav", id: "ting2"},
			{src: "dong.wav", id: "dong"},
			{src: "ci.wav", id: "ci"},
			{src: "da1.wav", id: "da"},
		];

		// 文件载入后添加监听器
		createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this));
		createjs.Sound.registerSounds(sounds, assetsPath);
	};

function soundLoaded(event) {};	

// 播放
function PlayAudio(target) {
	var instance = createjs.Sound.play(target.id);
	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
		return;
	}
};