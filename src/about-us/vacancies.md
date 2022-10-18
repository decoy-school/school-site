---
title: Job Vacancies
layout: default.njk
vacancies: []
---

{%if vacancies.length > 0%}
{%for vacancy in vacancies %}

<h2>{{vacancy.heading}}</h2>

{{vacancy.text}}

{% if vacancy.documents.length > 0%}

<div class="content-grid">
{% for document in vacancy.documents %}<a href="{{document.path}}">{{document.name}}</a>{% endfor %}
</div>
{% endif %}
{% endfor %}
<hr>
<p>We are committed to safeguarding and promoting the welfare of children and young people and expect all staff and volunteers to share this commitment. We encourage you to read our Child Protection and Safeguarding Policy before applying for any posts at Decoy Primary School. Posts are subject to an interview and enhanced DBS check.</p>
{% else %}
<p>There are currently no vacancies at the school. Thank you for your interest.</p>
{% endif %}
