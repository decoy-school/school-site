---
title: Policies
policies:
  - name: Admissions
    path: /uploads/Admissions-Policy.pdf
  - path: /uploads/Charging-and-Remissions-Policy-2019.pdf
    name: Charging and Remissions Policy
  - path: /uploads/Behaviour-Principles-Written-Statement-2018.pdf
    name: Behaviour Principles
  - name: Homework Policy 2018
    path: /uploads/2018-homework-policy.pdf
  - path: /uploads/2018-outdoor-education-visits-and-off-site-activities-policy.pdf
    name: Outdoor Education and Visits 2018
  - name: Supporting Pupils with Medical Condtions 2018
    path: /uploads/Supporting-Pupils-With-Medical-Conditions-2018-Policy.pdf
  - path: /uploads/Subject-Access-Requests-Policy-2018.pdf
    name: Subject Access Requests Policy 2018
  - path: /uploads/2019-2022-accessibility-plan.pdf
    name: Accessibilty Plan 2019-2020
  - path: /uploads/2019-anti-bullying-policy.pdf
    name: Anti-Bullying Policy 2019
---

This page contains links to school policies. If you can't easily see what you're looking for, please use the search box to filter the links.

<div class="content-grid">
  {% for policy in policies %}<a href="{{policy.path}}">{{policy.name}}</a>{% endfor %}
</div>
