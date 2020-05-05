---
title: Policies
policies:
  - name: Admissions
    path: /uploads/Admissions-Policy.pdf
  - path: /uploads/Charging-and-Remissions-Policy-2019.pdf
    name: Charging and Remissions Policy
---

This page contains links to school policies. If you can't easily see what you're looking for, please use the search box to filter the links.

<div class="content-grid">
  {% for policy in policies %}<a href="{{policy.path}}">{{policy.name}}</a>{% endfor %}
</div>
