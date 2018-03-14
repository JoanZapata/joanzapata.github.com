---
layout: home
jobs:
  - name: Margo Bank
    side: false
    icon: images/margo.png
    date: 2017 - Now
    skills:
      - Backend
      - Web
      - Android
      - iOS
    screenshots:
    description: |
      We are currently building a **new bank** for **small and medium businesses**, from scratch.

      Our goal is very ambitious and all the team is very talented.

      We’re all working **full-stack**, from the product definition to the implementations, backend,
      web and mobile.

      You can find more information [here](https://margo.com/).

      Also, [we’re hiring](https://margo.com/jobs/)!

  - name: Hertz 24/7
    side: false
    icon: images/h247.png
    date: 2016 - 2017
    skills:
      - iOS
    screenshots:
      - h247_0.jpg
      - h247_1.jpg
      - h247_2.jpg
      - h247_3.jpg
    description: |
      I worked on two distinct subjects on the Hertz 24/7 iOS app.

      - **In-app vehicle condition**
      - **Remote car opening using BLE**

      Aside from these topics, I chose to raise the overall maintainability of the app. It was a
      seven years old app, with multiple targets — [Flexicar](https://itunes.apple.com/au/app/flexicar/id963664904?mt=8)
      is built from the same source code —, no continuous integration, no clear branching model,
      no test, and a singleton based architecture. There was a lot to do so I focused myself on five
      main aspects.

      - **Continuous integration** using [Jenkins](https://jenkins.io/) and [Fastlane](https://fastlane.tools/)
      - **Continuous delivery** to [Beta](http://try.crashlytics.com/beta/) and the AppStore
      - **AppStore screenshots generation** using UI tests and [Snapshot](https://github.com/fastlane/fastlane/tree/master/snapshot)
      - **Refactoring** out of a singleton based architecture
      - **Tests** of all business rules in a separate framework with no dependency

      I learned a lot during this experience. Enabling in-app vehicle condition was a UX challenge,
      and the BLE communication library was a really good case for TDD/BDD. Eliminating the many
      obstacles in the beta/release process was really fulfilling. Working with legacy code and its
      large technical debt can be a frustrating experience, but it sharpened my skills at separating
      concerns, and taught me once again the importance of tests.

  - name: Memori
    side: true
    icon: images/memori.png
    date: 2016
    skills:
      - Design
      - iOS
    screenshots:
      - memori_walkthrough1.jpg
      - memori_walkthrough2.jpg
      - memori_walkthrough3.jpg
      - memori_walkthrough4.jpg
    description: |
      Memori helps people stop forgetting what matters to them using gamification. Memori is my
      first iOS app, you can read more about my transition from Android to iOS [here](http://blog.joanzapata.com/android-to-ios-in-10-days/).

  - name: Livetouch Apps
    icon: images/livetouch.png
    company: JCDecaux, Paris
    date: 2015 - 2016
    skills:
      - Design
      - Android
    screenshots:
      - livetouch_launcher.jpg
      - livetouch_twitter.jpg
      - livetouch_nearby.jpg
      - livetouch_rss.jpg
    description: |
      Livetouch is a set of 42" Android-powered screens integrated into urban furnitures like
      kiosks and bus shelters. In the context of expanding the platform to a lot of new cities,
      I designed and developed multiple applications to quickly adapt to each cities and provide
      useful information.

      - **A launcher app** customizable with news feed, twitter, weather, and a list of apps
      - **A twitter app** designed specifically for Livetouch
      - **An RSS app** allowing cities to quickly display any content on their Livetouchs
      - **A weather app** with a 3-days prediction on an interactive temperature curve
      - **A transport Widget** displaying next bus stops at the top of the screen
      - **A map app** showing points of interest and directions to get there
      - **An indoor map prototype app** to show directions inside malls

  - name: Créabri
    icon: images/creabri.png
    company: JCDecaux, Paris
    date: 2015
    screenshots:
      - creabri_1.jpg
    description: |
      Créabri is a tablet app to help JCDecaux agents collect in-depth details about bus shelters on
      the field and provide the city with the most accurate answer for a renewal contract. I
      designed and developed it from scratch. Technically, the biggest challenge of this app was its
      offline capabilities and reliable synchronization. It’s mostly based on RxJava and a reactive
      storage.
    skills:
      - Design
      - Android

  - name: ConnectCity
    company: JCDecaux, Paris
    icon: images/connectcity.png
    date: 2015
    skills:
      - Design
      - Web
      - Backend
    screenshots:
      - connectcity_1.jpg
      - connectcity_2.jpg
    description: |
      ConnectCity is a web app allowing the city of Paris to visualize on a map the state and
      maintenance operations of all JCDecaux street furnitures in Paris. I designed and developed
      the front end, and part of the backend.

  - name: Guillotine
    company: JCDecaux, Paris
    icon: images/guillotine.png
    date: 2015
    skills:
      - Android
      - Web
      - Backend
    screenshots:
      - guillotine.jpg
    description: |
      Guillotine is an automated testing platform for Android applications. It manages multiple
      connected devices through ADB, and tests APKs by installing them on the device and monitoring
      RAM, CPU, leaks, crashes, etc.. while smartly simulating touch events or reproducing a
      pre-recorded touch scenarios. Technically, this project was a good fit for me, it required
      Android skills to know how and what to test on APKs, backend skills to properly architecture
      the server side and web skills to generate an appealing administration board with many graphs
      and reports.

  - name: Midpic
    company: Redmill, Paris
    icon: images/midpic.png
    date: 2014
    skills:
      - Android
    screenshots:
      - midpic1.jpg
      - midpic2.jpg
      - midpic3.jpg
      - midpic4.jpg
    description: |
      Midpic is a social app to engage conversation with people using a playful mechanism based on
      fair trade of selfies. I developed the Android application, working alongside with two iOS
      developers to make the app available on both platforms. I learnt a lot from Candyshop and I
      developed [AsyncService](https://github.com/JoanZapata/android-asyncservice) to help me
      develop it faster.

  - name: S02
    side: true
    icon: images/s02.png
    date: 2014
    skills:
      - Design
      - Android
      - Backend
    screenshots:
      - S02_1.jpg
      - S02_2.jpg
      - S02_3.jpg
    description: |
      S02 helps keeping track of the progress in multiple TV shows. I designed and developed this
      minimalist app with subtle animations, backed by a cloud backend made with Parse.

  - name: Tracker Prototype
    company: Avalanche Tech Group, Australia
    icon: images/avalanche.png
    date: 2014
    skills:
      - Android
    description: |
      I developed a proof of concept for an Android app that would track suspicious usages of the
      camera or microphone and alert the user. The challenge was to bypass the Android platform
      restrictions to track the camera, microphone and GPS usage from other apps. I used the
      [Groovy](http://www.groovy-lang.org/) language on this prototype instead of Java, which was
      much more readable for all IO operations.

  - name: Candyshop
    company: Redmill, Paris
    icon: images/candyshop.png
    date: 2014
    skills:
      - Android
    screenshots:
      - candyshop1.jpg
      - candyshop2.jpg
      - candyshop3.jpg
    description: |
      Candyshop makes seduction sweeter and funnier. I developed the Android application from
      scratch, catching up on the iOS app started months before me. I mainly used Androidannotations
      and Spring REST template, I wrote a lot of custom animated components like radio buttons,
      partially blurred pictures, pictures swipe view, etc...

  - name: Design My App
    company: eBusinessInformation, Paris
    icon: images/dma.png
    date: 2014
    skills:
      - Design
      - Android
      - Web
      - Backend
    screenshots:
      - dma_1.jpg
      - dma_2.jpg
      - dma_3.jpg
    description: |
      Web tool to quickly generate a fully working Android app displaying data on a map based on
      open data services or CSV files. I designed and developed the initial website using AngularJS,
      and the backend written with Spring and RESTEasy. The backend includes an Android application
      generation engine, which generates apps based on the user selected data and settings.

  - name: Memory Map
    side: true
    icon: images/memorymap.png
    date: 2013 - Now
    skills:
      - Design
      - Android
    screenshots:
      - memorymap1.jpg
      - memorymap2.jpg
      - memorymap3.jpg
    description: |
      Memory Map helps users with insufficient disk space to remove their biggest files through an
      interactive view. This app made me go through the whole lifecycle of a product on my own. I
      went from the initial idea to the final release, including the design, development,
      communication and monetization. Technically, I learnt a lot about the Android Canvas API and
      rendering optimization, which is crucial for creating graphically unique animated custom
      components.

  - name: JCDecaux Developer
    company: JCDecaux, Paris
    icon: images/jcdecauxdev.png
    date: 2013
    skills:
      - Design
      - Web
      - Backend
    screenshots:
      - jcdecaux_developer.jpg
    description: |
      All of JCDecaux bike-sharing data made available to all developers through a dedicated website
      and API. I designed and developed the website with AngularJS and a Java/Spring backend. I
      managed user registration, API key generation, the interactive documentation for developers
      and an administration interface.

  - name: VuzZz
    icon: images/vuzzz.png
    date: 2012
    skills:
      - Design
      - Android
      - Backend
    screenshots:
      - vuzzz_1.png
      - vuzzz_2.png
      - vuzzz_3.png
    description: |
      Winner app of the Global Android DevCamp 2012 Paris (48h-hackaton), it gives a rating to any
      place, based on the density and quality of public services around it. I worked both on the
      server side — Play Framework, hosted in the cloud —, and on the Android side.

  - name: Livetouch Platform
    company: JCDecaux, Paris
    icon: images/livetouch.png
    date: 2011 - 2013
    skills:
      - Design
      - Web
      - Backend
    screenshots:
      - livetouch_1.jpg
      - livetouch_2.jpg
    description: |
      Livetouch is a set of 42" Android-powered screens integrated into urban furnitures like kiosks
      and bus shelters. In the context of expanding the platform to a lot of new cities, I designed
      and developed multiple applications to quickly adapt to each cities and provide useful
      information.

      I designed, developed and deployed in production a distributed system with many actors:
        - A real-time administration interface written with GWT
        - A distributed server with webservices based on Spring
        - An Android service running as root on all devices
        - MQTT brokers for real-time communications
        - Cassandra databases for usage stats and logs
        - A MySQL database for relational data

  - name: Capico
    company: eBusinessInformation, Paris
    icon: images/capico.png
    date: 2011
    skills:
      - Android
      - Backend
    description: |
      A digital workbook for a class of student, with lessons and exercises, and real-time feedback
      for the teacher. I developed the Android application from scratch with another developer, as
      two others developed the iOS app. Also worked on the server side, used TDD, written unit and
      functional tests on both server and Android sides.
---
