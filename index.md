---
layout: page
title: Geric Lau's blog
tagline: 
---
{% include JB/setup %}


<!-- These are my posts.

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul> -->



<div class="span8" id="main-content">
  <div class="posts-index">
    {% for post in site.posts %}
        <div class='post'>
          <h3 class='post-title'>
            <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
          </h3>
          <div class='post-content'>
            {{ post.content }}
            <em>Writed by: Geric Lau, Published on: {{ post.date | date_to_string }}</em> | <a href="{{ BASE_PATH }}{{ post.url }}">Leave a reply</a>
          </div>
        </div>
    {% endfor %}
  </div>
</div>
<div class="span4" id='sidebar'>
  <h3>Tag Box</h3>
  <ul class="tag_box inline">
    {% assign tags_list = site.tags %}  
    {% include JB/tags_list %}
  </ul>
</div>