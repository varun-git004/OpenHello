import React, { useState } from "react";
import TextType from "./TextType";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="grid grid-cols-1 justify-center">
      {/* Typing intro */}
      <div className="text-center mt-5 mb-20">
        <TextType
          text={[
            "Welcome to OpenHello",
            "Learn how to contribute to Open Source!",
          ]}
          typingSpeed={75}
          deletingSpeed={40}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          textColors={["#2B2D42"]}
          loop={true}
          className="text-3xl md:text-6xl font-bold text-center"
        />
        <h2 className="text-2xl font-semibold">
          Your first step into OpenSource
        </h2>
      </div>

      {/* About / Steps Card */}
      <div className="w-11/12 mx-auto bg-white dark:bg-[#ef233c] border-2 shadow-lg p-10 mt-8 rounded-t-[8vh]">
        {/* Switch buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("about")}
            className={`px-4 py-2 text-lg md:text-xl font-semibold rounded-2xl border-2 transition-colors ${
              activeTab === "about"
                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-black"
                : "text-gray-700 dark:text-gray-300 border-black hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("steps")}
            className={`px-4 py-2 text-lg md:text-xl font-semibold rounded-2xl border-2 transition-colors ${
              activeTab === "steps"
                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-black"
                : "text-gray-700 dark:text-gray-300 border-black hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            Steps
          </button>
        </div>

        {/* Content wrapper */}
        <div className="flex flex-col justify-start">
          {activeTab === "about" ? (
            <>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white leading-relaxed">
                <span className="text-4xl md:text-5xl text-[#2B2D42] font-bold">
                  OpenHello
                </span>{" "}
                is a beginner-friendly platform that helps you make your first
                open source contribution. For many beginners, contributing to
                open source feels intimidating. OpenHello simplifies this
                process by giving you a tangible first success in the form of a
                personalized Hello Card. Your Hello Card shows your name, photo,
                greeting, and GitHub profile link.
              </p>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white leading-relaxed mt-4">
                Contribute in a few simple steps: fork the repo, update your card
                data, and submit a pull request. Once your PR is merged, your
                card appears on the contributors page, showcasing your first open
                source achievement.
              </p>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white leading-relaxed mt-4">
                OpenHello was created by{" "}
                <span className="font-semibold">Siddesh Navthale</span> to help
                beginners gain confidence and practical experience in open
                source.
              </p>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white leading-relaxed mt-4">
                It’s interactive, visual, and beginner-friendly, making your
                first contribution simple, fun, and rewarding.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                Steps to Contribute
              </h1>
              <h2 className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-8">
                Contribute directly from GitHub — no setup needed! Just follow
                these quick steps.
              </h2>

              <ol className="max-w-3xl mx-auto space-y-6 list-decimal list-inside text-lg md:text-xl text-gray-900 dark:text-white leading-relaxed">
                <li>
                  <strong>Fork the Repository:</strong> Click the{" "}
                  <em>Fork</em> button on the OpenHello GitHub repo.
                </li>
                <li>
                  <strong>Update Your Card Data:</strong> Edit the contributors’
                  file and add your name, photo URL, and GitHub profile link.
                </li>
                <li>
                  <strong>Submit a Pull Request:</strong> Propose your changes by
                  creating a PR from your fork to the main repo.
                </li>
                <li>
                  <strong>Get Featured:</strong> Once your PR is merged, your
                  personalized Hello Card will appear on the Contributors page!
                </li>
              </ol>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
