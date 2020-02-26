var soundCount;
var loadCount=0;

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
		soundCount = sounds.length;
		// 文件载入后添加监听器
		createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this));
		createjs.Sound.registerSounds(sounds, assetsPath);
	};

// 文件载入后启用按钮
function soundLoaded(event) {
	document.getElementById(event.id).disabled=false;
	loadCount++;
	if (loadCount>=5) {
		document.getElementById("load-message").hidden=true;
	}
};	

// 播放
function PlayAudio(target) {
	var instance = createjs.Sound.play(target.id);
	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
		return;
	}
};