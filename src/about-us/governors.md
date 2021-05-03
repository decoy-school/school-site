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
    picture: /images/people/govs/oliver-laity.jpg
  - description: Chris Winfield
    picture: /images/people/govs/chris-winfield.jpg
  - description: Kay Dicken
    picture: /images/people/govs/placeholder.png
  - description: Pete Obsorne, Clerk
    picture: /images/people/govs/pete-osborne.jpg
---

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
