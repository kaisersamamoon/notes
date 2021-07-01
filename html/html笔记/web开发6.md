#### html如何在网页嵌入视频

#### video元素

<video width="宽"height "高" src="视频"待播放的内容>备用内容</video>

**controls属性;播放插件**

**autoplay属性：自动播放**

**muted属性：静音**

sourse元素:指定备用文件

```html
<video width="576" height="1024" controls="controls" muted="muted">非常抱歉，本视频由于不可抗拒因素导致无法正常播放
    <source src="video/IMG_6706.MP4" type="video/mp4">

</video>
```



视频预加载：

| 属性     | 值                   | 说明                                                         |
| -------- | -------------------- | :----------------------------------------------------------- |
| autoplay | autoplay             | 如果指定该属性，则视频在就绪后将自动播放。                   |
| controls | controls             | 如果指定该属性，则向用户显示控件，比如播放/暂停按钮。        |
| height   | pixels               | 指定视频播放器的高度。                                       |
| loop     | loop                 | 如果指定该属性，将循环播放视频。                             |
| muted    | muted                | 如果指定该属性，则将视频的音频输出为静音。                   |
| poster   | URL                  | 指定视频正在下载时显示的图像。                               |
| preload  | auto、metadata、none | 指定视频在页面加载时，是否进行预加载。注意：如果同时指定了 autoplay 属性，则忽略该属性。 auto：要求浏览器尽快加载整个视频，默认行为 metadata：只加载视频的元数据（宽度、高度、第一帧影像和视频总长度等） none：在用户点击开始播放之前不会加载视频 |
| src      | URL                  | 指定要播放的视频文件的 URL 地址。                            |
| width    | pixels               | 指定视频播放器的宽度。                                       |

封面显示：默认为视频的第一帧

poster属性：设置视频封面

循环：loop

**播放音频文件**

```html
<p>yesterday<br><br><audio src="music/Yesterday%20Once%20More.mp3" controls="controls">
     非常抱歉，此音频由于不可抗拒因素导致无法正常播放
</audio></p>
```

#### **audio元素**

**track元素：轨道，根据时间轴为音频添加文本、**

**vebvtt格式;互联网视频文本轨道格式**

**第一步关键词;**

开始时间             结束时间

WEBVTT



00:00:00.250 --> 00:00:13.254

字幕内容



00:00:13.254 --> 00:00:16.254

字幕内容

