// 音乐控制功能
        const audio = document.getElementById('bgMusic');
        const playBtn = document.getElementById('playMusic');
        const pauseBtn = document.getElementById('pauseMusic');
        const stopBtn = document.getElementById('stopMusic');
        
        // 初始化音乐设置
        audio.loop = true;
        audio.volume = 0.1;
        
        // 从localStorage恢复播放状态
        const savedState = sessionStorage.getItem('musicState');
        if (savedState) {
            const state = JSON.parse(savedState);
            audio.currentTime = state.currentTime || 0;
        }
        
        // 页面卸载前保存状态
        window.addEventListener('beforeunload', saveMusicState);
        
        // 保存音乐状态到localStorage
        function saveMusicState() {
            const state = {
                currentTime: audio.currentTime,
            };
            sessionStorage.setItem('musicState', JSON.stringify(state));
        }
        
        // 音乐控制按钮事件
        playBtn.addEventListener('click', function() {
            audio.play().catch(error => {
                console.log('播放失败:', error);
                alert('播放失败: 浏览器策略阻止自动播放，请点击页面任意位置后再试');
            });
        });
        
        pauseBtn.addEventListener('click', function() {
            audio.pause();
        });
        
        stopBtn.addEventListener('click', function() {
            audio.pause();
            audio.currentTime = 0;
        });

		audio.play();
		
			// 在用户与页面交互后尝试自动播放
			document.addEventListener('click', function() {
			    if (audio.paused) {
			        audio.play().catch(error => {
			            console.log('自动播放失败:', error);
			        });
			    }
			});