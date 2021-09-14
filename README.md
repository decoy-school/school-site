# Decoy School

## Static Site Build Project

This repository contains code to build [Decoy Primary School's website](http://www.decoyschool.co.uk). It uses [Eleventy](https://www.11ty.dev) to build static html/css and [Netlify CMS](https://www.netlifycms.org) for content management. It is currently hosted on [Netlify](https://www.netlify.com).

**THIS PROJECT IS WORK IN PROGRESS**

`npx @11ty/eleventy --serve` to start dev server
`npx @11ty/eleventy` to build

### To Do (not a complete list)

- ~~Finish moving over content~~
- ~~Structure upload folder/media library - fix links to images and pdfs~~
- ~~Add Netlify CMS script/support/admin page - needs to be done alongside with above, as does putting on github/netlify to get cms to work~~
- ~~Netlify CMS config~~
- Properly test cms
- Check policies, page content, etc against current site - what needs to be updated? <-- ongoing
  - Curriculum page
    - Nothing for nursery
  - Nursery Page
    - ~~No Prospectus (404)~~ **doc removed**
    - ~~Nursery Admissions link -> permissions problem~~ **doc removed**
    - ~~Note of interest~~
    - ~~Nursery Twitter~~
  - Governors
    - ~~Document to show make up of governing body~~
    - Reogranise minutes by committee rather than year
- Styling ~~(basic - this will mostly be inline in layout header)~~ <-- no it won't
  - ~~style lists normal lists~~
  - ~~responsive nav~~ <- look into accessibilty, ~~and animation~~
  - ~~twitter/fb/sidebar~~ (add other links? pta social <- do we use this? council link for snow closure)
  - ~~value pictures list styling/templating~~
  - ~~styling tables (font?)~~
  - ~~styling calc policy list on curriculum info page~~
  - ~~add most recent curriculum overview docs~~
- ~~add toc's - styling and layout~~
- Photos - take new photos, check permissions, look at https://www.npmjs.com/package/eleventy-plugin-sharp for processing/responsive images
- Things to keep in Google Drive (for now):
  - BASC club docs - linked from BASC page
  - ~~Governors info (minutes etc) - linked from Governors page~~
- Pages with placeholder content or nothing:
  - SEND
  - PP
  - Extra curricular
  - School meals - needs menu pdfs? **add widgit for this**
- Pages to update:
  - Values (body text, posters)
  - ~~Curriculum (body text)~~
  - Curriculum ongoing - need each pdf
  - ~~Safety information (videos, etc out of date)~~
  - ~~staff page~~
- **FINISH HOME PAGE - STYLE BANNER, IMPROVE LOADING, ~~MOVE TWITTER FEED~~**
- Look into https://www.npmjs.com/package/eleventy-plugin-sharp
- ~~Add footer logos to homepage - check what's current~~
- ~~Add site search functionality~~ <- **this needs to index document content**
- add AR link to homepage (https://ukhosted51.renlearn.co.uk/2236651/Public/RPM/Login/Login.aspx?srcID=s)
