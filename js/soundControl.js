var soundCount;
var loadCount=0;

// 初始化
function init() {
		if (!createjs.Sound.initializeDefaultPlugins()) {
			return;
		}

		var assetsPath = "https://cdn.jsdelivr.net/gh/reed-overflow/reed-dong-ci-da-ci/media/";
		var sounds = [
			{src: "ting.wav", id: "ting"},
			{src: "dang1.wav", id: "dang"},
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
var nowColor = 0;
function PlayAudio(target) {
	var instance = createjs.Sound.play(target.id);

	var Arraycolor = new Array(
		"#621624",
		"#856d72",
		"#a35c8f",
		"#66c18c",
		"#dfc243",
		"#f7c173"
		);
	if(nowColor == (Arraycolor.length - 1)) {
		nowColor = 0
	}
	nowColor++;
	document.body.style.backgroundColor = Arraycolor[nowColor];

	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
		return;
	}	
};

// 键盘
function keydown(e) {
	var currKey=0,e=e||event; 
	currKey=e.keyCode||e.which||e.charCode;
	if (currKey == 65) // A
		document.getElementById("dong").click();
	if (currKey == 83) // S
		document.getElementById("ci").click();
	if (currKey == 68) // D
		document.getElementById("da").click();
	if (currKey == 81) // Q
		document.getElementById("dang").click();
	if (currKey == 69) // E
		document.getElementById("ting").click();
		
};

document.onkeydown = keydown;
