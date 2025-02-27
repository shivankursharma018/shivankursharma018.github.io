---
layout: default
title: Shivankur Sharma's Blog
---

## Latest Posts

<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}</li>
  {% endfor %}
</ul>
