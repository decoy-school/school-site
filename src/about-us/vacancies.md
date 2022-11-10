---
title: Job Vacancies
layout: default.njk
vacancies:
  - heading: KS1 Class Teachers
    text: W﻿e are currently looking to appoint a permanent teacher for KS1 from
      January 2023, and a temporary teacher to cover maternity leave from
      February 2023. Please see the documents below for further information and
      an application form.
    documents:
      - name: Class Teacher Advertisment
        path: https://res.cloudinary.com/dkimqodar/raw/upload/v1668098982/vacancies/Teacher_advertisment_qke4pv.docx
      - name: Person Specification
        path: https://res.cloudinary.com/dkimqodar/raw/upload/v1668098981/vacancies/Person_spec_x1a60a.docx
      - name: Job Description
        path: https://res.cloudinary.com/dkimqodar/raw/upload/v1668098981/vacancies/Class_teacher_job_description_cexedn.docx
      - name: Application Form
        path: https://res.cloudinary.com/dkimqodar/raw/upload/v1668098982/vacancies/Application_form_-_teaching_urjocz.docx
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
