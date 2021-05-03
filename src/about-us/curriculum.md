---
title: Our Curriculum
curriculumOverviews:
  - term: Autumn
    overviews:
      - name: Reception
        path: /uploads/curriculum-autumn-yr.pdf
      - name: Year 1
        path: /uploads/curriculum-autumn-y1.pdf
      - name: Year 2
        path: /uploads/curriculum-autumn-y2.pdf
      - name: Year 3
        path: /uploads/curriculum-autumn-y3.pdf
      - name: Year 4
        path: /uploads/curriculum-autumn-y4.pdf
      - name: Year 5
        path: /uploads/curriculum-autumn-y5.pdf
      - name: Year 6
        path: /uploads/curriculum-autumn-y6.pdf
  - term: Spring
    overviews:
      - name: Reception
        path: /uploads/curriculum-spring-yr.pdf
      - name: Year 1
        path: /uploads/curriculum-spring-y1.pdf
      - name: Year 2
        path: /uploads/curriculum-spring-y2.pdf
      - name: Year 3
        path: /uploads/curriculum-spring-y3.pdf
      - name: Year 4
        path: /uploads/curriculum-spring-y4.pdf
      - name: Year 5
        path: /uploads/curriculum-spring-y5.pdf
      - name: Year 6
        path: /uploads/curriculum-spring-y6.pdf
  - term: Summer
    overviews:
      - path: /uploads/curriculum-summer-yr.pdf
        name: Reception
      - name: Year 1
        path: /uploads/curriculum-summer-y1.pdf
      - name: Year 2
        path: /uploads/curriculum-summer-y2.pdf
      - name: Year 3
        path: /uploads/curriculum-summer-y3.pdf
      - name: Year 4
        path: /uploads/curriculum-summer-y4.pdf
      - name: Year 5
        path: /uploads/curriculum-summer-y5.pdf
      - name: Year 6
        path: /uploads/curriculum-summer-y6.pdf
---

[[toc]]

Our curriculum reflects the requirements of the [National Curriculum programmes of study](https://www.gov.uk/government/collections/national-curriculum), which all maintained schools in England must teach.

![Children learning maths](/uploads/numicon.jpg)

## Curriculum Intent

All children learn, practice, develop and refine a wide range of skills in their work across the curriculum. Every child's ability is recognised, developed and rewarded with our curriculum tailored to meet individual needs and aspirations. We have high expectations and a strong focus on literacy and numeracy across the curriculum.

We promote enjoyment for learning and encourage children to work independently, with partners and in groups helping them embed social skills though collaboration and cooperation. To meet each child's individual needs, we provide extra support, enrichment and new challenges to help every child fulfil their potential.

Pupil engagement is key to pupil success and we plan relevant, enjoyable and interesting experiences to broaden thinking and develop a love of lifelong learning. All children access a wide range of extra-curricular activities - we welcome visitors, plan exciting trips off site and organise residential stays to France and the Isle of Wight to support learning and enthuse and inspire.

Alongside the statutory National Curriculum, PSHE and RE, our curriculum also includes the 'hidden curriculum'. We aim to teach children how to grow into positive, responsible people, who can work and co-operate with others while developing knowledge and skills and crucially achieve all that they can.

The links below outline the curriculum during the academic year for each year group and the termly overviews.

If you would like any other information about our school curriculum, please contact Mrs. Heather Poustie, Headteacher.

## Remote Learning Information



The documents below give key information for parents and carers, detailing our remote education and support offers for Nursery, Early Years, Key Stage 1 and Key Stage 2 whilst children are learning at home due to the ongoing COVID-19 pandemic.



<div class="cf infoButtons">
	[Remote Education Information](/uploads/Providing_remote_education_information_to_parents_Jan 2021_Decoy.pdf)
	[Nursery & Reception Guidance](/uploads/Guidance-Remote-Learning-and-Support-Offer-Nursery-Reception.pdf)
	[Key Stages 1 & 2 Guidanace](/uploads/Guidance-Remote-Learning-and-Support-Offer-KS1-KS2.pdf)
</div>

## Mathematics

Please use these links for our calculation policy and for the key objectives for each year group in maths:

<div class="content-grid">
	<a href="/uploads/calculation-policy.pdf">Calculation Policy</a>
	<a href="/uploads/key-objectives-y1.pdf">Year 1 Key Objectives</a>
	<a href="/uploads/key-objectives-y2.pdf">Year 2 Key Objectives</a>
	<a href="/uploads/key-objectives-y3.pdf">Year 3 Key Objectives</a>
	<a href="/uploads/key-objectives-y4.pdf">Year 4 Key Objectives</a>
	<a href="/uploads/key-objectives-y5.pdf">Year 5 Key Objectives</a>
	<a href="/uploads/key-objectives-y6.pdf">Year 6 Key Objectives</a>
</div>

## Phonics

In September 2020, we started to teach phonics through the Read, Write Inc (RWI) programme. Phonic lessons are carried out each day. The children are taught according to their phonic knowledge; each child is taught to their specific need and is therefore able to reach their potential.

All of the children are assessed half termly to ensure progress is rapid. The children learn phonics through RWI until they are confident, fluent readers. The lessons are structured in order to maximise learning and this is achieved through a multi-sensory approach.

The children work in pairs or groups and within each lesson they are given activities to develop their knowledge of sounds, develop their fluency in reading as well their comprehension which in turn helpis them to transfer this knowledge in order to write in sentences.

The sounds are known as pure sounds and they are learned through the children repeating the sound modelled by the teacher. To help with letter formation, each sound is linked to a picture and a mnemonic. This helps them to remember the sound as well as write it.

We encourage a love of reading. To do this there are three steps to support your child on this journey:

1. First read for decoding
2. Second read for fluency
3. Third read for comprehension

Please share books with your child as often as possible and encourage them to talk about what is happening. What, where, when why and how are always really good question starters to encourage more than a one-word answer.
In order to further support your child with their sounds and reading and writing, the video below gives an overview of how the pure sounds are said.



<iframe class="video" src="https://www.youtube.com/embed/UCI2mu7URBc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Early Reading

Teaching of phonics is integral to the teaching of reading and although a major part, it is not the only thing we do. We have a range of reading books from which the children can choose. These are organised into colour bands, through which children progress as their phonic and comprehension skills develop. In addition to Letters and Sounds sessions, the children are taught by their teacher in what are called "guided reading" groups where teachers teach and assess children's reading skills. Children are also free to borrow books from our school library.

## Year Group Curricula

Please use the links below for an overview of the curriculum being followed by each year group. If you would like a flavour of some of the rich learning experiences at Decoy School, please have a look at our Twitter feed.

{% for term in curriculumOverviews %}

<h3>{{term.term}}</h3>
<div class="content-grid">
  {% for overview in term.overviews %}<a href="{{overview.path}}">{{overview.name}}</a>{% endfor %}
</div>
{% endfor %}
