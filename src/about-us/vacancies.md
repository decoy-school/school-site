---
title: Job Vacancies
layout: default.njk
vacancies:
  - heading: Breakfast Club Play Worker
    text: >-
      #### 5 days a week (7.45-8.55am) 1 hr 10 mins per day - £9.60 per hour

      This role is to provide our children with a calm and positive breakfast experience that is safe, sociable and fun. This role includes responsibility for supervising the children in the hall or community room.


      If you are interested in this position and would like to be part of our friendly team of dedicated staff, then we would be delighted to hear from you. To find out more, please contact the school in person by telephone (01626 353282) or email admin@decoyschool.co.uk.
  - heading: Meal Time Assistant
    text: >-
      #### 5 days a week - 1 hour per day - £9.50 per hour

      This role is to provide our children with a calm and positive lunchtime experience that is safe, sociable and fun. This role includes responsibility for supervising the children in the dining hall and on the playground.


      If you are interested in this position and would like to be part of our friendly team of dedicated staff, then we would be delighted to hear from you. To find out more, please contact the school in person by telephone (01626 353282) or email admin@decoyschool.co.uk.
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
