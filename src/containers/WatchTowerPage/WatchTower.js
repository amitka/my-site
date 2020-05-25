import React from "react";
import * as Icons from "../../Icons";

export const WatchTower = () => {
  return (
    <article className="page-content">
      <div className="center-column">
        <h4>April 2019</h4>
        <h1>Falling down the Rabbit Hole</h1>
        <p>
          Or how we built consumer mobile app at a large scale B2B enterprise
        </p>
        <figure>
          <img
            src={require("../../assets/watch-tower/hole.jpeg")}
            alt="alice-in-wonderland"
          />
        </figure>
        {/* 1 */}
        <h3>Introduction</h3>
        <p>
          After we were approached by one of our largest partners, who asked us
          to help them with the sales of Check Point SMB appliances line, we
          launched the watch tower project.
        </p>
        <blockquote>
          <p>
            The problem we faced was how to expose the value of this box
            (appliance) to the customer / end user. He was paying good money for
            it and always wondered what this mysterious black box is doing for
            him.
          </p>
        </blockquote>
        <p>
          Without a doubt, Check Point's appliance top features are its security
          capabilities, which are the industry top standarts and what makes it
          appealing.
        </p>
        <p>
          We decided to “open a door” to these capabilities and let the end user
          know what this appliance is doing for him every minute of the day.
        </p>
        {/* 2 */}
        <h3>Research</h3>
        <p>
          We started our research by trying to understand who are our potential
          users and came up with 3 different personas:
        </p>
        <ul>
          <li>
            The first and obvious one is “Jean the IT admin” of a medium size
            company. He is probably responsible for all the IT related issues
            and partly handles security as part of his job. He’s a very busy guy
            with a lot on his mind and surly will welcome any help that we can
            provide him.
          </li>
          <li>
            The second one we called “Gill the Prosumer” as we identified him as
            a very professional consumer, who maybe works in the security
            industry but surely understands and cares about his network
            security.
          </li>
          <li>
            The third one will be “Dan the home user” who own a very advanced
            router and probably doesn't know a thing about network security. His
            main concern is the home wi-fi network, and why his son cant connect
            his Xbox to the online store.
          </li>
        </ul>
        <p>
          At the second phase of our research, after scanning other vendors
          products in this market from companies like Asus, Netgear, Norton &
          Google, we were even more convinced that focusing on security features
          will make the difference for us and set down to start planning.
        </p>
        <figure>
          <img
            src={require("../../assets/watch-tower/OtherVendors.png")}
            alt="other-vendors"
          />
          <figcaption>Other Vendors</figcaption>
        </figure>

        {/* 3 */}
        <h3>High Level Design </h3>
        <p>
          The best way of start planning a product user experience (UX), is by
          creating simple user stories that describes how the user will interact
          with this product.
        </p>
        <blockquote>
          <p>
            Analyzing the user stories later on will help us understand what are
            the features that we need to develop, and how the user interface
            (UI) of the product will look like.
          </p>
        </blockquote>
        <p>
          When we had a good deal of user stories, we pulled out of each one of
          them the features that were described in it, and prioritize them so we
          can have a sense of where to start and what can come later (Product
          roadmap).
        </p>
        <p>
          One of the main requested features that popped out of the user stories
          was the ability to recive (push) notifications about security events
          and appliance's health issues.
        </p>
        <p>
          This will become one of our key valuable features for this app, as by
          doing so we will change the way the user interact with the appliance.
          Letting him be aware of incidents that are about to come, will change
          his passive user behavior (not aware of what’s happening) to an active
          one where he takes charge of his security, reflecting the appliance
          value.
        </p>
        <p>Some other key features that came up from the user stories:</p>
        <ul>
          <li>
            Network Snapshot - connected devices (who is a potential threat ?)
          </li>
          <li>
            Immediate Actions - block device, share wifi, quick configuration
            and more...
          </li>
          <li>
            Connectivity Status - am i connected right now ? (Internet, VPN,
            ...)
          </li>
          <li>
            Events History - what happened in the last 24 hrs. ? day ? week ?
          </li>
          <li>Large Scale - manage more then 1 appliance</li>
        </ul>

        {/* 4 */}
        <h3>UI Patterns</h3>
        <p>
          With all this data in our hands, we started with the high level
          mockups of the application user interface. It was clear for us that we
          are supporting both available platforms: iOS & Android , so we tried
          to generate this kind of flow that will feel native on each OS type.
        </p>
        <p>
          We weren't looking for adventures in the UI. We wanted to make this
          app a tool that will be easy and intuitive with a low learning curve.
        </p>
        <blockquote>
          <p>
            The complexity here was to accommodate both the needs of an IT admin
            from one side and a home user on the other.
          </p>
        </blockquote>
        <p>
          While searchong for the main navigation pattern, we went over several
          patterns and settled on the bottom tabbed navigation pattern, that
          seemed to us most suitable for our needs. We were aware that on the
          android platform it is less acceptable, but with the recent support of
          this pattern in the material design library the growing number of
          hybrid apps that are coming out, and the overall popularity of this
          pattern at many major apps, we felt sure about using it for our needs.
        </p>
        <figure>
          <img
            src={require("../../assets/watch-tower/InitialConcept.jpg")}
            alt="bottom-nav"
          />
          <figcaption>Bottom Navigation Pattern</figcaption>
        </figure>
        <p>
          Another aspect of navigation was to solve the issue of switching
          between multiple appliances. Most user stories which were related to
          this were for the IT admin persona, but nevertheless we had to figure
          this out in order to get a full understanding of the whole application
          navigation system.
        </p>
        <p>
          At first we tried some drill down concepts, but none of them was to
          our satisfaction. They required many user taps in order to get from A
          to B, and were screen “real estate” heavy consumers, for a feature
          that was intended for only a third of our users types.
        </p>
        <p>
          We found our solution in the modal side drawer pattern. It simplified
          our UI and was scalable enough to fit to our needs of a possible large
          list of appliances. The fact that this element is hidden off main
          screen (using the notorious hamburger menu) fitted the concept that
          this was intended mainly for our “power user” (IT admin) which we were
          sure that will make the effort to discover it.
        </p>
        <figure>
          <img
            src={require("../../assets/watch-tower/SideDrawerNavConcepts.jpg")}
            alt="side-menu"
          />
          <figcaption>Side Drawer Pattern</figcaption>
        </figure>

        {/* 5 */}
        <h3>Detailed Design</h3>
        <p>
          During our design process we experimented with various sets of tabbed
          content for the main app navigation system. At the end we found our
          match at a 4 tabbed navigation set with the following setup (Left to
          right):Home, Events, Statistics and Settings.
        </p>
        <p>
          Special attention was given to the home tab view. This is the user
          first engagement point with the app, and we wanted it to be easy to
          digest, with meaningful data that will draw the user in. It should
          contain the essence of the app itself with relevant point of interest
          for all user types.
        </p>
        <figure>
          <img
            src={require("../../assets/watch-tower/HomeTabConcepts.jpg")}
            alt="home-tab"
          />
          <figcaption>Home Screen Concepts</figcaption>
        </figure>
        <p>
          We tried several different concepts and after long discussions, we
          have agreed to proceed with the combined view (option no.3) as we
          concluded that it is the most appropriate one.
        </p>
        <p>
          Its basic structure is of a vertical split screen. In the upper part
          there is a simplified network topology map that can give a quick
          snapshot of the current network status. We wanted to bring the
          appliance to the front stage and give him some “publicity exposure” so
          we added a picture of it and a name label. All items on it are
          interactive and by tapping on them the user can drill down to other
          relevant section in the app.
        </p>
        <p>
          On the bottom part we focused on security. We came up with this
          dashboard / list view structure that allows the user to see urgent
          issues and get more information with a single tap. Although the
          content of each item has changed over the design process several
          times, we limited the number of items to three as we didnt want to
          crowed the screen with too much data.
        </p>
        <p>
          At this point, we continued to the next phase of detailing each layout
          and page to get a full view of all app’s possible layouts, screens and
          flows.
        </p>
        <blockquote>
          <p>
            We remembered each time to return to our user stories and match them
            against the suggested UI, making adjustments as needed. Also getting
            feedback from management and other teams helped us a lot to “figure
            it out”.
          </p>
        </blockquote>
        <p>
          It's known that things can get out of hand very quickly and become too
          complicated, so we set ourselfs some basic guidelines:
        </p>
        <ul>
          <li>
            Display on screen only what is relevant. The fact that you know or
            have some data, does not means that it has to be on screen. Have a
            reason for displaying it.
          </li>
          <li>
            Help the user solve his problem, show him your recommended solution
            (preferably one option). try never to leave him at a dead end.
          </li>
          <li>
            Try to avoid deep drill downs (of more the 2 layers) to reduce
            complexity preventing user disorientation.
          </li>
        </ul>
        <figure>
          <img
            src={require("../../assets/watch-tower/ItemPage.jpg")}
            alt="item-page"
          />
          <figcaption>Simple functional inner pages</figcaption>
        </figure>
        <p>
          The design process kept on going, with numerous meeting and iterations
          each time getting the mocks more and more accurate and refined.
        </p>

        {/* 6 */}
        <h3>User Onboarding</h3>
        <p>
          Another important obstacle to pass was the user's first time
          experience with the app a.k.a user onboarding. For us, as a pure B2B
          organization it was a little hard at the beginning to fully grasp the
          meaning and need of such a flow, but after some examples and
          discussions everybody was convinced of its necessity.
        </p>
        <blockquote>
          <p>
            It was very important to us to make this process as simple and quick
            as possible, with the minimum screens required from the minute the
            user downloaded the app until he gets his first value.
          </p>
        </blockquote>
        <p>
          Along the way the dev team came up with a great little trick to
          shorten the process, by allowing to scan a QR code in order to insert
          appliance credentials instead of typing them in some long form like
          page. Everyone who ever deployed an appliance on mobile will surely
          love this shortcut.
        </p>
        <p>
          We ended up also including some “traditional” onboarding screens
          describing key product feature mainly for our home user persona
          helping him to understand potential value from this app.
        </p>
        <figure>
          <img
            src={require("../../assets/watch-tower/OnBoarding.jpg")}
            alt="on-boarding"
          />
          <figcaption>First Time experience Concept</figcaption>
        </figure>

        {/* 7 */}
        <h3>Usability Testing</h3>
        <p>
          We conducts several usability testing session during the design
          process at our in-house usability lab. Important thing we learned
          during this was to let the testee choose his “native” phone when
          performing the tests as we found them struggling with the OS instead
          of the tests when they were on other phones.
        </p>

        {/* 7 */}
        <h3>Product Launch</h3>
        <p>On April 2019 we launched the app in both stores.</p>
        <figure>
          <img
            src={require("../../assets/watch-tower/packShot.jpg")}
            alt="pack-shot"
          />
          <figcaption>Final Product</figcaption>
        </figure>

        <footer className="footer-links">
          <ul className="links-list">
            <li className="link-item">
              <a href="https://apps.apple.com/il/app/check-point-watchtower/id1294087547">
                <span className="link-icon">{Icons.AppStore}</span>
                <span>App Store</span>
              </a>
            </li>
            <li className="link-item">
              <a href="https://play.google.com/store/apps/details?id=com.checkpoint.smbdeviceapp">
                <span className="link-icon">{Icons.PlayStore}</span>
                <span>Play Store</span>
              </a>
            </li>
            <li className="link-item">
              <a href="https://www.youtube.com/watch?v=TG5tKuWfqh0">
                <span className="link-icon">{Icons.YouTube}</span>
                <span>YouTube</span>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </article>
  );
};
