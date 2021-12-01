---
title: Our Governors
documents:
  - name: Summary of Governors Information
    path: /uploads/decoy-summary-of-governor-information-september-2021.pdf
  - name: Governing Body Roles
    path: /uploads/governing-body-roles.pdf
  - name: Decoy Summary of Governor Information 2021
    path: /uploads/decoy-summary-of-governor-information-september-2021-.pdf
people:
  - description: Heather Poustie, Headteacher
    picture: /uploads/heather-poustie.jpg
  - description: Simon Barnes, Co-opted Governor, Chair
    picture: /uploads/simon-barnes.jpg
  - description: Paul Evemy, Co-opted Governor, Vice Chair
    picture: /uploads/paul-evemy.jpg
  - description: Sandra Cartwright, Co-opted Governor, Vice Chair
    picture: /uploads/sandra-c.jpg
  - description: Oliver Laity, Co-opted Governor
    picture: /uploads/oliver-laity.jpg
  - description: Kay Dicken, Associate Member
    picture: /uploads/placeholder.png
  - description: Pete Obsorne, Clerk
    picture: /uploads/pete-osborne.jpg
  - description: Ruth Dennis, Co-opted Governor
    picture: /uploads/ruth-d-2-.jpg
  - description: Kate Eames, Co-opted Governor,
    picture: /uploads/kate-e.png
  - description: Ruth Shoare, Parent Governor
    picture: /uploads/ruth-s.jpg
  - description: Andrew McKenzie, Parent Governor
    picture: /uploads/placeholder.png
  - description: Gill Quantrell, Co-opted Governor
    picture: /uploads/gill-q-2-.bmp
  - description: Craig Veal, Staff Governor
    picture: /uploads/placeholder.png
termsOfReference:
  - path: /uploads/Terms-of-Reference-Board-of-Governors-Autumn-2020.pdf
    name: Board of Governors
  - path: /uploads/Terms-of-Reference-LW-Committee-September-2020.pdf
    name: Business Management Committee
  - path: /uploads/Terms-of-Reference-BM-Committee-September-2020.pdf
    name: Business Management Committee
  - path: /uploads/Terms-of-Reference-for-the-Pay-Committee-Autumn-2020.pdf
    name: Business Management Committee
minutes:
  - committee: Full Board Meetings
    documents:
      - name: Full Board Meeting, 1/2/21
        path: /uploads/fgb-minutes-1-february-2021.pdf
      - name: Full Board Meeting, 7/12/20
        path: /uploads/fgb-minutes-7-december-2020.pdf
      - name: Full Board Meeting, 5/10/20
        path: /uploads/fgb-minutes-5-october-2020.pdf
      - name: Full Board Meeting, 13/7/20
        path: /uploads/fgb-minutes-13-july-2020-final.pdf
      - name: Full Board Meeting, 23/3/20
        path: /uploads/fgb-minutes-200323-final.pdf
      - name: Full Board Meeting, 3/2/20
        path: /uploads/fgb-minutes-200203-final.pdf
      - name: Full Board Meeting, 9/12/19
        path: /uploads/fgb-minutes-191209-final-.pdf
      - name: Full Board Meeting, 14/10/19
        path: /uploads/fgb-minutes-191014.pdf
  - committee: Learning and Well Being Committee Meetings
    documents:
      - name: Learning and Wellbeing Committee, 18/1/21
        path: /uploads/lw-committee-minutes-18-january-2021.pdf
      - name: Learning and Wellbeing Committee, 16/11/20
        path: /uploads/lw-committee-minutes-16-november-2020.pdf
      - name: Learning and Wellbeing Committtee, 21/9/21
        path: /uploads/lw-committee-minutes-21-september-2020.pdf
  - committee: Business Management Committtee Meetings
    documents:
      - name: Business Mangement Committee, 25/1/21
        path: /uploads/bm-committee-minutes-25-january-2021.pdf
      - name: Business Mangement Committee, 23/11/20
        path: /uploads/bm-committee-minutes-23-november-2020.pdf
      - name: Business Mangement Committee, 28/9/20
        path: /uploads/bm-committee-minutes-28-september-2020.pdf
---

[[toc]]

## About Us

All Governors can be contacted through the Clerk to Governors, Mr Peter Osborne - <a href="mailto:posborne@decoyschool.co.uk">posborne@decoyschool.co.uk</a>.

<div class="content-grid">
  <a href="https://drive.google.com/folderview?id=0B0102cki14zKM1V0bDRJZVFyRmM&usp=sharing">Governors Information</a>
  {% for document in documents %}<a href="{{document.path}}">{{document.name}}</a>{% endfor %}
</div>

<div class="content-grid">
{% for person in people %}
<figure>
  <img src="{{person.picture}}" alt="{{person.description}}">
  <figcaption>{{person.description}}</figcaption>
</figure>
{% endfor %}
</div>

## Terms of Reference

<div class="content-grid">
{% for document in termsOfReference %}<a href="{{document.path}}">{{document.name}}</a>{% endfor %}
</div>

## Meeting Minutes

{% for committee in minutes %}

### {{committee.committee}}

<div class="content-grid">
{% for document in committee.documents %}<a href="{{document.path}}">{{document.name}}</a>{% endfor %}
</div>
{% endfor %}
