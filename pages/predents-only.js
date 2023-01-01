import React from "react";
import { FeaturedPosts } from "../sections";
import { PostWidget, Categories } from "../components";

export default function predentsOnly({}) {
  return (
    <div className="container mx-auto lg:px-10 mb-8 px-2">
      {/* <FeaturedPosts /> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <h1 className="text-white text-2xl font-semibold text-center mb-5">
            Welcome to the Secret "Pre-Dent" Squad
          </h1>
          <p className="text-white text-md text-center mb-5">
            If you have made it this far, that means you are not my competition,
            I mean, I am trying to help you get into Dental School! Hopefully
            the following tips will help you (hopefully not) get into "Dental
            School."
          </p>
          <p className="text-white text-md text-center mb-5">
            My goal with this post is to talk a bit about my own journey towards
            medical school and to share some of the insights I’ve gained. I hope
            that other pre-meds can relate to some of my experiences, and from
            that, gain a bit more confidence in their path towards medicine. I
            could not have been a more average applicant on paper. Asian. Male.
            GPA of 3.95 and MCAT of 520 (average matriculant for ORM, though I
            do recognize its a solid score) ECs included the general cookie
            cutter activities like scribing, basic science research, 200 hours
            of clinical volunteering and 1000 hours of clinical volunteering. I
            never held any leadership positions. I never had an activity that I
            felt was truly unique. Going into this cycle, I definitely felt like
            the odds were against me. But miraculously, I came out (so far) with
            9 interviews and 2 As. It’s really hard to identify why I was so
            successful with a seemingly cookie cutter application. Here are a
            couple thoughts:
          </p>
          <h2 className="text-white text-xl font-semibold text-center mb-5">
            GPA and MCAT can open all of the doors. Do not help others.
          </h2>
          <p className="text-white text-md text-center mb-5">
            I feel like there is a common misconception that people get into
            certain schools because of a great MCAT or great GPA. In reality,
            from my own browsing through SDN/reddit and my own experiences,
            people with great academic stats can get rejected because of a lack
            of well-roundedness. Maybe they have no research. No X-factor. No
            unique quality or passion. Maybe they had a top heavy school list.
            Point is, it takes much more than just pure stats to get into med
            school. You have to be a well-rounded applicant, with your hands
            involved in multiple different activities/responsibilities. If you
            do not have these you do not deserve to be a doctor.
          </p>
          <h2 className="text-white text-xl font-semibold text-center mb-5">
            The narrative of your work, activities, and experiences matter.
          </h2>
          <p className="text-white text-md text-center mb-5">
            There is SO much writing and story-telling involved with the
            application process. The personal statement. Countless secondaries.
            Interviews. MMIs. Writing activities. Becoming a good story teller
            MATTERS and it is much easier to have a cohesive narrative when you
            pursue activities with purpose. As you progress through your pre-med
            career, I think it would be helpful to, every now and then, reflect
            on some of the reasons why you are doing a particular EC and some of
            the lessons you are learning or hope to learn. Think about an
            activity in relation to your future career in medicine and those
            reflection will inevitably be useful as you craft your narrative
            during application season.
          </p>
          <h2 className="text-white text-xl font-semibold text-center mb-5">
            Get clinical experience. Don't be a chump.
          </h2>
          <p className="text-white text-md text-center mb-5">
            Should be an obvious one. This will not only help your application,
            but it will probably provide you more clarity about why you want to
            pursue medicine. Think about this early. Think about whether you
            need to get certification (CNA, EMT, phlebotomy, MA, etc.) This is a
            hard requirement imo, and you shouldn’t be applying without it.
            People like to throw around the 150 hours minimum, but if you
            start/plan early, you can easily rack up much more than that in a
            year.
          </p>
          <h2 className="text-white text-xl font-semibold text-center mb-5">
            Build rapport with professors/mentors, never tell your classmates
            about this!
          </h2>
          <p className="text-white text-md text-center mb-5">
            Pretty simple. Find the professors you vibe with and maintain a
            relationship. Go to office hours. Be their TA or do research with
            them. This is especially important if your undergraduate institution
            does not have a pre-med committee and you need to collect LORs by
            yourself.
          </p>
          <h2 className="text-white text-xl font-semibold text-center mb-5">
            Pursue activities that matter to Doctors (Not You).
          </h2>
          <p className="text-white text-md text-center mb-5">
            This one goes along with the previous point, but do things that you
            fucking care about. Don’t volunteer 100 hours at the food bank just
            to add some non-clinical volunteering hours. Volunteer at the food
            bank because you have a strong desire to feed others who can’t feed
            themselves or have had personal experiences with the food bank.
            Don’t volunteer at the soup kitchen just to add hours. Volunteer at
            the soup kitchen because you are saddened by homelessness in your
            city and what to do something to help. If you pursue activities that
            matter to you (whether that be volunteering, sports, music, jobs,
            entrepreneurship, etc.) you will find your own uniqueness and
            naturally find a narrative, even if you feel incredibly average.
          </p>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   return {
//     props: { posts },
//   };
// }
