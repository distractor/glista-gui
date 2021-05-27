<template>
  <div class="about text">
    <h1>Motivation</h1>
    <div class="text">
      This application was developed to simplify <strong>league scoring system</strong> for paragliding cross country competitions. Previously, the scoring system was limited to <a href="https://www.fai.org/sites/default/files/documents/annex_24b_-_proposal_scoring.pdf">GAP scorings</a>, however, with the recent emerge of <a href="https://www.timebasedscoring.org">time based scoring</a> and other alternative scoring systems, something had to bo done to prevent recomputing same competition results using different scoring systems. Therefore, <strong>GLISTA scoring</strong> emerged.
    </div>
    <h1>Idea</h1>
    <div class="text">
      To cover all current and possible future scoring systems, first, their common properties have been identified. One common property is that no matter what scoring is used, each pilot is in the end assigned to a certain position in the ranking table. So instead of focusing on the achieved points or required time, <strong>GLISTA scoring</strong> focuses on the rank a pilot is assigned to on each competition day. This information is used as the basis for any further computation.
    </div>
    <div class="text">
      Once the competition pilots ranks are obtained, scoring logic is applied. During the scoring procedure, a pilot is given a certain amount of points according to rank achieved. The motiviation for this was taken from MotoGP scoring systems, where only first 15 places are rewarded in an uneaven manner.
    </div>
    <h1>Implementation</h1>
    <div class="text">
      For the implementation purposes backend and frontend projects were developed. Both are avaliable as open source projects licensed under MIT.
      <ul>
        <li>API is developed using the .NET framework, sources avaliable at <a href="https://github.com/distractor/glista-api">github repository <b-icon-github></b-icon-github></a> and</li>
        <li>frontend is developed using Vue + Typescript with bootstrap-vue framework, sources available at <a href="https://github.com/distractor/glista-gui">github repository <b-icon-github></b-icon-github></a>.</li>
      </ul>
      Feel free to further develop any of the projects.
      <div class="text">
        <h2>Authors</h2>
        <div class="text">Thanks to:
          <ul>
            <li>Mitja Jančič
              <a href="mailto:mitjajancic@gmail.com">
                <b-icon-envelope></b-icon-envelope>
              </a>
              <a href="https://github.com/distractor">
                <b-icon-github></b-icon-github>
              </a>
            </li>
          </ul>
        </div>
        <h2>Contributors</h2>
        <div class="text">Thanks to:
          <ul>
            <li>Tilen Ceglar
              <a href="https://github.com/tceglar">
                <b-icon-github></b-icon-github>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
a {
  padding-left: 3px;
}
</style>
