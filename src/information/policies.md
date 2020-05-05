---
title: Policies
layout: links.njk
policies:
  - name: Admissions
    path: /uploads/Admissions-Policy.pdf
---

This page contains links to school policies. If you can't easily see what you're looking for, please use the search box to filter the links.

<div class="content-grid">
  {% for policy in policies %}<a href="{{policy.undefined}}">{{policy.policy}}</a>{% endfor %}
</div>
