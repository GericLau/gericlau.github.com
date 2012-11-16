---
layout: post
title: "无需翻墙，享受谷歌高速服务"
description: "Setting google default with https on chrome"
kewords: google, https, chrome, GFW
category: 
tags: [blog]
---
{% include JB/setup %}

最近一段时间google一度瘫痪不能用，对于大陆用户来说，即使谷歌能用，速度也很慢，导致大量用户转向百度。但是对于大多数人来说，谷歌的搜索还是更好的，这是毫无疑问，但是怎么才能更好的使用谷歌呢？我这里介绍一个十分方便的方法。前提很简单，只需要你机子有个chrome就行，无论你是什么系统，当然Mac的我就无能为力，因为chrome在Mac上的体验不怎么样。

### 步骤
1.在地址栏中输入chrome://net-internals/并点击回车
2.点击HSTS的标签栏，在Domain里填上需要访问的domain，谷歌的是www.google.com.hk
3.然后选择include subdomains点击Add按钮即可，这是将子域名添加进去。

![tips image](/assets/images/posts/2012-11-16-01.png)

这样就成功了，自己动手试试吧。体验飞快并优秀的谷歌搜索。
