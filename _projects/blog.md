---
layout: project
title: Blog
description: Technical writing
permalink: /blog/
---
{::options parse_block_html="true" /}

<div class="col-12 offset-sm-0 col-md-8 offset-md-2 col-lg-6 offset-lg-3 vertical-center">

I sometimes write about things that I'm learning:

<ul>
    {% for post in site.posts %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
</ul>

</div>
