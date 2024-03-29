
# BIRS 2023: Team 2

Team members:

    - Santi

    - Anran

    - Parth

    - India

--------------------------------------------------------------------------------------------------------------------------

Instructions:

   * Etherpad is a nice collaboration tool that allows us to create shared documents where everyone can write.
   * Content will be **highlighted** with a **specific color for each collaborator**.
   * We encourage you to **add your name** through the top right button (the one with the people logo), so we can keep track of your inputs.
   * Etherpad offers the option to remove the highlight after text has been added. **Please don't do it.**
   * **Start writing** and **don't delete** other people's inputs.
   * You can **add comments** to other people's inputs: select the text and use the comment button in the top bar.
   * Please, **don't share the link to the pad**.
--------------------------------------------------------------------------------------------------------------------------



## Discussion Questions



### How can we improve the communication within our communities?

   * *How do you mainly interact with the SimPEG and Fatiando communities? (Slack channels, forums, weekly meetings, etc.) *
   * *What aspects do you like and don't like about them? *
   * *What could be improved? *
   * *Are our communication channels working for the community? How they can be improved?*
   * *Are there any alternative channels we should explore? *


**Documentation**



We identified that documentation is another form of communication within our projects. In this sense, we identified some places for improvements on the documentation pages of our projects.



   * Discoverability of communication channels. Better advertise the Slack Channels, SimPEG newsletter, 
   * Getting started guides for newcomers
       * Generate comprehensive getting started pages with guides to how to get involved in the community, how to start using the software, how to contribute.
       * Include links to:
           * Meeting calendar
           * Youtube video
           * Meeting notes
           * Communication channels (Slack, forums, etc)
   * FAQs section in documentation pages
       * Write down complete answers to frequently asked questions that we can point people to when they ask them.
   * Have a page that lists all existing tutorials (like gallery examples but for tutorials)
       * Link the tutorials in the relevant documentation
       * Link useful learning materials/books like Geosci.xyz for physics and math background
   * Include source code into the documentation page for a function or class
       * See how we do it in Fatiando and implement it in SimPEG
   * Add a page that lists published work that use SimPEG and/or Fatiando 
       * It is useful to see examples of how people are using the packages in research and this would capture emerging application not captured by the gallery or tutorials.


**Meetings**



   * Monthly recap meeting, and upload to YouTube channel
       * The monthly recap meeting should conclude the new updates for the past month so that new contributors can catch up with them.
   * Having two time slots for meetings
       * They allow people from different regions of the world to connect




### What future research can be enabled by SimPEG and Fatiando?

   * *What future research directions and use cases are you considering to take in which SimPEG and Fatiando could be useful?*
   * *How SimPEG and/or Fatiando can enable them?*
   * *What parts of these research directions do you think are possible to achieve at the moment with the existing tools?*
   * *What parts aren't?*
   * *What do you think it's needed to achieve them? *


**New features**

   * Enable adjusting p value (Lp-norm) in data misfit term
   * Pre-processing data corrections for potential field to take raw data from the instrument
       * Adding drift, base stations, levelling, tide, latitude,etc. corrections.


**Making our codes faster**

   * CUDA implementation: Run matrix operation on GPU will be faster than on CPU since GPU is good at parallel computing
   * To accelerate running them on CPUs, we may consider use openMP, which enables then to run on multi-core CPUs. Or Devito ([https://github.com/devitocodes/devito)](https://github.com/devitocodes/devito)) that is used by SLIM group at Georgia Tech ([https://github.com/slimgroup/JUDI.jl)](https://github.com/slimgroup/JUDI.jl))


**Working together (make Fatiando and SimPEG work more tightly together)**

   * Joint meetings to prevent overlap and work together on common points
   * Work together on using Choclo and Geoana for forward modelling operations
   * Start putting together tutorials
       * Create tutorials that take raw data to inversion using both packages
       * Organise an event like Transform using the tutorials
       * Work on these tutorials piece by piece, start publishing them online
       * 



**Theoretical background references**

   * Expand geosci.xyz or work on the Geophysics Library that Leo started
   * Useful for students and for professional from other fields
   * Include all the theoretical background math and concepts needed to use the packages. Keep the same notation and define a glossary.
   * Connect functions and tutorials with these theoretical background pages.
       * E.g: a forward function for gravity should connect with the pages for gravitational forces




### How can we increase the diversity of our communities?

   * *How to create a more welcoming environment for people to interact with our  communities?*
   * *Should we create connections with other organizations that push towards more diversity in science?*
   * *Which organizations?*
   * *How that interaction would look like? What activities could we jointly do? *


**Barriers for underrepresented groups to engage with our communities**

   * Language
       * Add tutorials or video walk-through in home-languages of devs and practitioners.
       * Some note: It's challenging to translate docstrings, and hard to maintain.
   * Lack of entry level contributors and users in meetings and Slack
       * Seeing not only experience users and developers in the meetings would encourage other newcomers to interact more and join more meetings


**Connecting with other organizations**

Present our works to workshops hold by organizations that encourage diversity

       * Possible organizations to reach out to: 
           * Earth Science Women's Network ([https://eswnonline.org/)](https://eswnonline.org/))
           * diversity sub-committees in AGU, EGU,etc; 
           * Women in mining  ([https://wimcanada.org/)](https://wimcanada.org/))
           * GeoLatinas ([https://geolatinas.org/nosotras/)](https://geolatinas.org/nosotras/))
           * Equator project ([https://equatorresearchgroup.wordpress.com/)](https://equatorresearchgroup.wordpress.com/));
           * Software Sustainability Institute ([https://www.software.ac.uk/)](https://www.software.ac.uk/))


**Mentorship program**

   * Pair newcomers to mentors
       * Easier to ask questions for a newcomer to one person rather than the whole dev community. 
   * Give priority to newcomers in the underrepresented groups 
   * Match mentee and mentor with similar cultural background
   * If newcomers struggle with the software background, they can start with helping with the theoretical background pages
   * Tutorials/guide for newcomers will help assist mentoring


### How to make these projects more sustainable?

   * *How sustainable do you perceive these projects are?*
       * *"They will last for decades" vs "I see they could stop being maintained at any point"*
   * *How to ensure future development, maintenance and community support of the  projects?*
   * *How can we assess the impact of these projects in the geoscientific community?*
   * *How can we encourage users and researchers to share works that use SimPEG  and Fatiando?*


**Metrics**

   * Citations
   * Downloads
   * Mira/geoapps
   * Should add analytics in SimPEG documentation (like Fatiando) to track where users are coming from and which pages are visited most. 


**Sponsors**

   * Spread the word through conferences and workshops
   * Call for donation after presenting the works using SimPEG and Fatiando


**Tutorials and theoretical background pages**

   * Helps newcomers to start getting involved
   * Can be used for teaching, conferences, workshops, events, etc.