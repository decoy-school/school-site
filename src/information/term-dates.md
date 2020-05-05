---
title: Term Dates
documents:
  - name: Term Dates, 2019-2020
    path: /uploads/Term-Dates-2019-2020.pdf
  - name: Term Dates, 2020-2021
    path: /uploads/Term-Dates-2020-2021.pdf
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<div class="content-grid">
  {% for document in documents %}<a href="{{document.path}}">{{document.name}}</a>{% endfor %}
</div>