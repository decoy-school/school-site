---
title: Governors Information
layout: default.njk
documents:
  - name: Meet the Governors
    path: /about-us/meet-the-governors
  - name: Governing Body Roles
    path: /uploads/governing-body-roles.pdf
  - name: Decoy Summary of Governor Information 2021
    path: /uploads/decoy-summary-of-governor-information-september-2021-.pdf
  - name: Meeting Attendance 2021-22
    path: /uploads/governor-attendance-2021-2022.pdf
  - name: Meeting Dates 2022-23
    path: /uploads/governing-body-and-committee-meeting-dates-2022-2023.pdf
termsOfReference:
  - path: /uploads/Terms-of-Reference-Board-of-Governors-Autumn-2020.pdf
    name: Board of Governors
  - path: /uploads/Terms-of-Reference-LW-Committee-September-2020.pdf
    name: Learning and Wellbeing Committee
  - path: /uploads/Terms-of-Reference-BM-Committee-September-2020.pdf
    name: Business Management Committee
  - path: /uploads/Terms-of-Reference-for-the-Pay-Committee-Autumn-2020.pdf
    name: Pay Committee
committees:
  - committee: Full Board Meetings
    documents:
      - name: Full Board Meeting 23/05/2022
        path: /uploads/fgb-minutes-23-may-2022-.pdf
      - name: Full Board Meeting, 13/12/21
        path: /uploads/full-board-meeting-13.12.21.pdf
      - name: Full Board Meeting, 6/12/21
        path: /uploads/full-board-meeting-6.12.21.pdf
      - name: Full Board Meeting, 12/7/21
        path: /uploads/full-board-meeting-12.7.21.pdf
      - name: Full Board Meeting, 17/5/21
        path: /uploads/full-board-meeting-17.5.21.pdf
      - name: Full Board Meeting, 29/3/21
        path: /uploads/full-board-meeting-29.3.21.pdf
      - name: Full Board Meeting, 7/12/20
        path: /uploads/full-board-meeting-7.12.20.pdf
      - name: Full Board Meeting, 5/10/20
        path: /uploads/full-board-meeting-5.10.20.pdf
      - name: Full Board Meeting, 11/10/21
        path: /uploads/full-board-meeting-11.10.21.pdf
      - name: Full Board Meeting, 1/2/21
        path: /uploads/fgb-minutes-1-february-2021.pdf
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
  - committee: Learning and Wellbeing Committee Meetings
    documents:
      - name: Learning and Wellbeing Committee, 9/5/22
        path: /uploads/lw-committee-minutes-9-may-2022-final.pdf
      - name: Learning and Wellbeing Committee, 7/3/22
        path: /uploads/lw-committee-minutes-7-march-2022-final.pdf
      - name: Learning and Wellbeing Committee, 17/1/22
        path: /uploads/lw-committee-minutes-17-january-2022-final.pdf
      - name: Learning and Wellbeing Committee, 15/11/21
        path: /uploads/learning-and-wellbeing-committee-15.11.21.pdf
      - name: Learning and Wellbeing Committee, 4/10/21
        path: /uploads/learning-and-wellbeing-committe-4.10.21.pdf
      - name: Learning and Wellbeing Committee, 6/7/21
        path: /uploads/learning-and-wellbeing-committee-6.7.21.pdf
      - name: Learning and Wellbeing Committee, 10/5/21
        path: /uploads/learning-and-wellbeing-committee-10.5.21.pdf
      - name: Learning and Wellbeing Committee, 8/3/21
        path: /uploads/learning-and-wellbeing-committee-8.3.21.pdf
      - name: Learning and Wellbeing Committee, 18/1/21
        path: /uploads/lw-committee-minutes-18-january-2021.pdf
      - name: Learning and Wellbeing Committee, 16/11/20
        path: /uploads/lw-committee-minutes-16-november-2020.pdf
      - name: Learning and Wellbeing Committtee, 21/9/21
        path: /uploads/lw-committee-minutes-21-september-2020.pdf
  - committee: Business Management Committtee Meetings
    documents:
      - name: Business Management Committee, 16/5/22
        path: /uploads/bm-committee-minutes-16-may-2022-final.pdf
      - name: Business Management Committee, 21/3/22
        path: /uploads/bm-committee-minutes-21-march-2022-final.pdf
      - name: Business Management Committee, 24/1/22
        path: /uploads/bm-committee-minutes-24-january-2022-final.pdf
      - name: Business Management Committee, 22/11/21
        path: /uploads/business-mangement-committee-22.11.21.pdf
      - name: Business Management Committee, 27/9/21
        path: /uploads/business-mangement-committee-27.9.21.pdf
      - name: Business Management Committee, 5/7/21
        path: /uploads/business-mangement-committee-5.7.21.pdf
      - name: Business Management Committee, 26/4/21
        path: /uploads/business-mangement-committee-26.4.21.pdf
      - name: Business Management Committee, 15/3/21
        path: /uploads/business-mangement-committee-15.3.21.pdf
      - name: Business Management Committee, 11/5/20
        path: /uploads/business-mangement-committee-11.5.20.pdf
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
  {% for document in documents %}<a href="{{document.path}}">{{document.name}}</a>{% endfor %}
</div>

## Terms of Reference

<div class="content-grid">
{% for document in termsOfReference %}<a href="{{document.path}}">{{document.name}}</a>{% endfor %}
</div>

## Meeting Minutes

{% for committee in committees %}

<h3>{{committee.committee}}</h3>

<div class="content-grid">
{% for document in committee.documents %}<a href="{{document.path}}">{{document.name}}</a>{% endfor %}
</div>
{% endfor %}
