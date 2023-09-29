
# BIRS 2023: Team 4

Team 4. Agustina, Kalen, Joe, Jiajia

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
In summary, we need to create/provide/summarize resources (e.g., welcome documentation, new users' guide, new developers' guide), and point people to the correct place for asking questions, reporting bugs, etc. properly (i.e., following the best practices explained in the welcome documentation or new users'/developers' guide). To further grow the community and facilitate more synergy between SimPEG and Fatiando, more communication between the two groups will also be helpful.



Below are some action items that can help achieve the goal of improving communications:



- Welcome bot for slack, point to good practices and the #welcome channel.

- Have a document with all the resources/guide/links.

- Give cross links between communities. Related to this, we could update this repository ([https://github.com/softwareunderground/awesome-open-geoscience)](https://github.com/softwareunderground/awesome-open-geoscience)) and share it



- Setup a joint online meeting in the future



### What future research can be enabled by SimPEG and Fatiando?

   * *What future research directions and use cases are you considering to take in which SimPEG and Fatiando could be useful?*
   * *How SimPEG and/or Fatiando can enable them?*
   * *What parts of these research directions do you think are possible to achieve at the moment with the existing tools?*
   * *What parts aren't?*
   * *What do you think it's needed to achieve them? *


- Demonstrate modularity of tools to perform joint inversions

- Many under-utilized aspects of both resources, better highlight how they can be used to perform specific tasks?

- Develop, promote and showcase the modularity for more complex tasks such as joint inversion, consrained inversion. 

- Develop new functionality of procedural model generation that allows for the quick generation of tens of thousands of models following some user specified rules and/or some seeds. This will make SimPEG and Fatiando more relevent for machine learning based research, where creating labeled training data set is the most time consuming but critical step.

- Develop a complete workflow from data correction, processing all the way to 3D inversions and maybe interpretation.

- More joint inversion or constrained inversion between different types of geophysical and geological data. For example, given a geological cross-section or a seismic image, how can we efficiently extract the structural information and effectively use it to constraint inversion of geophysical data? Or, given a 3D seismic velocity model or electrical conductivity model from other sources, how to perform constrain inversion of, say, gravity data in SimPEG or Fatiando?



- Create a general SimPEG simulation that can be used as wrapper for other forward modeling tools





### How can we increase the diversity of our communities?

   * *How to create a more welcoming environment for people to interact with our  communities?*
   * *Should we create connections with other organizations that push towards more diversity in science?*
   * *Which organizations?*
   * *How that interaction would look like? What activities could we jointly do? *


-Permissive licencing terms. The MIT licence is a good example. There is software that exists that is advertised as open source, but will not work without some paid-for token. (Example: Geosoft GX Python uses the ddl from the Windows install to open gdb files.). Another example are licences where commercial use is prohibited.

-Welcome people with diverse skill levels. No one has to be an expert. Encourage collaboration among people with different skill sets. (Developing better tutorials and documentations can help fostre collobaration among people with diverse skill sets and levels.)



- Make a connection with PyOpenSci to talk about mentories because they are interesting to implement something like is to help people to contribute in OSS. 



- Translate some tutorials with subtitles and important document to break the language barrier. 

- Hosting local workshops reaching out to local research groups and students who do not speak English. One such example is the 1 day SimPEG workshop in Chinese as part of the upcoming EM conferene in SUSTech.

- Collaborate with existing programs/organizations that are geared toward undeveloped regions or underrepresented groups of individuals. For example, SimPEG was part of two Geoscience Without Borders (GWB) projects where SimPEG was used by local researchers to solve hydrogelogical problems. Other organizations include SEG Women Networking Committee, PyOpenSci, and GeoLatinas.

- Reaching out to student organizatiaon on campus (e.g., SEG student chapers at many universities) to (1) show how open source projects can help advance the use of geophysics and accelerate discovery, and (2) to teach students how to start an open source project, how to get involved in existing open source projets, how to contribute, etc.



### How to make these projects more sustainable?

   * *How sustainable do you perceive these projects are?*
       * *"They will last for decades" vs "I see they could stop being maintained at any point"*
   * *How to ensure future development, maintenance and community support of the  projects?*
   * *How can we assess the impact of these projects in the geoscientific community?*
   * *How can we encourage users and researchers to share works that use SimPEG  and Fatiando?*


- Attract more people to the community and provide proper guidance and education to help them grow into developers and maintainers. To achieve this, need to motivate people and help them better understand the benefits and positive impact of these open source projects. 

- Develop a mentorship program where new users or developers are paired with more experienced users or developers.

 Develop roadmaps for SimPEG/fatiando and include them as part of the packages' documentations. 

- Teach undergraduates using open source tools where ever possible. Resist the urge to use MatLab and the like.

-Show some recognition to people who make regular contributions. For example, some sort of 'atta boy' might be appreciated and provide some encouragement.

-Measurements (numbers) that might help gauge impact in geocience community: (++ Andrea is interested in working on this too, Cool!)

    Citations in papers

    # of downloads on github

    # of contributors on github

    # of hours or views of tutorials on YouTube

    # of workshops/conferences that have SimPEG or Fantiando content of some sort

-Promotion: sell more T-shirts.

-Encourage people to share their works that use S and F. Educate prople about benefits of sharing their work. (more visibility, more people using their method, allow others to build on thier work). Sharing work might be harder for industry users if client data is involved.


