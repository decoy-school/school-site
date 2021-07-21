---
title: Our Governors
people:
  - description: Keith Moore, Chair
    picture: /images/people/govs/keith-moore.jpg
  - description: Heather Poustie, Headteacher
    picture: /images/people/heather-poustie.jpg
  - description: Simon Barnes, Vice Chair
    picture: /images/people/govs/simon-barnes.jpg
  - description: Paul Evemy
    picture: /images/people/govs/paul-evemy.jpg
  - description: Sandra Cartwright
    picture: /images/people/govs/placeholder.png
  - description: Paul Reynolds
    picture: /images/people/govs/paul-reynolds.jpg
  - description: Oliver Laity
    picture: /images/people/govs/chris-winfield.jpg
  - description: Kay Dicken
    picture: /images/people/govs/placeholder.png
  - description: Pete Obsorne, Clerk
    picture: /images/people/govs/pete-osborne.jpg
  - description: Ruth Dennis
    picture: /images/people/govs/placeholder.png
  - description: Kate Eames
    picture: /images/people/govs/placeholder.png
  - description: Ruth Shoare
    picture: /images/people/govs/placeholder.png
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
  - year: 2020-2021
    documents:
      - name: Full Board Meeting, 1/2/21
        path: /uploads/fgb-minutes-1-february-2021.pdf
      - name: Business Mangement Committee, 25/1/21
        path: /uploads/bm-committee-minutes-25-january-2021.pdf
      - name: Learning and Wellbeing Committee, 18/1/21
        path: /uploads/lw-committee-minutes-18-january-2021.pdf
      - name: Full Board Meeting, 7/12/20
        path: /uploads/fgb-minutes-7-december-2020.pdf
      - name: Business Mangement Committee, 23/11/20
        path: /uploads/bm-committee-minutes-23-november-2020.pdf
      - name: Learning and Wellbeing Committee, 16/11/20
        path: /uploads/lw-committee-minutes-16-november-2020.pdf
      - name: Full Board Meeting, 5/10/20
        path: /uploads/fgb-minutes-5-october-2020.pdf
      - name: Business Mangement Committee, 28/9/20
        path: /uploads/bm-committee-minutes-28-september-2020.pdf
      - name: Learning and Wellbeing Committtee, 21/9/21
        path: /uploads/lw-committee-minutes-21-september-2020.pdf
  - year: 2019-2020
    documents:
      - name: Full Board Meeting, 14/10/19
        path: /uploads/fgb-minutes-191014.pdf
---

[[toc]]

## About Us

All Governors can be contacted through the Clerk to Governors, Mr Peter Osborne - <a href="mailto:posborne@decoyschool.co.uk">posborne@decoyschool.co.uk</a>.

<div class="content-grid">
  <a href="https://drive.google.com/folderview?id=0B0102cki14zKM1V0bDRJZVFyRmM&usp=sharing">Governors Information</a>
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

{% for year in minutes %}

### {{year.year}}

<div class="content-grid">
{% for document in year.documents %}<a href="{{document.path}}">{{document.name}}</a>{% endfor %}
</div>
{% endfor %}
