---
title: Job Vacancies
layout: default.njk
vacancies:
  - heading: KS2 Class Teacher
    text: "Required for September 2023, Decoy Community Primary School are looking
      for an experienced, dynamic and dedicated class teacher, to work alongside
      our experienced staff to help shape and continue to develop our ambitious
      and strong curriculum.\r We are looking for a teacher with experience of
      teaching in Year 6; an interest in mathematics and experience of teaching
      for mastery is desirable.\r\n"
    documents:
      - name: KS2 Class Teacher Advertisment
        path: https://res.cloudinary.com/dkimqodar/raw/upload/v1681849285/vacancies/KS2_Teacher_advert_April_2023_l8hoeh.docx
      - name: KS2 Class Teacher Job Description
        path: https://res.cloudinary.com/dkimqodar/raw/upload/v1681849284/vacancies/JD_and_Person_Spec_Y6_teacher_2023_xxsnff.docx
      - name: Class Teacher Application Form
        path: https://res.cloudinary.com/dkimqodar/raw/upload/v1681849284/vacancies/Teaching_Application_Form_2023_amplgr.docx
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
