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
