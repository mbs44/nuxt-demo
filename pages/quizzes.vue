<template>
  <section class="section">

        <b-steps
            :position="position"
            :label-position="labelPosition"
            :size="size"
            vertical>

            <b-step-item label="Get ready" icon="play" >
                   <figure class="b-image-wrapper image">
                    <img src="~/assets/QuizTime.jpg" style="width:500px">
                  </figure>
  
            </b-step-item>

            <b-step-item v-for="(question, i) in questions" :key="i" :label="`${question.label}`" icon="check">
                 
                <div class="box">
                  <b>{{question.text}}</b>
                </div>

                <b-field>
                <b-radio v-model="questions[i].result"
                    native-value="a">
                    A: {{question.a}}
                </b-radio>
                </b-field>
                <b-field>
                    <b-radio v-model="questions[i].result"
                        native-value="b">
                        B: {{question.b}}
                    </b-radio>
                </b-field>
                <b-field>
                    <b-radio v-model="questions[i].result"
                        native-value="c">
                          C: {{question.c}}
                    </b-radio>
                </b-field>
                <b-field>
                    <b-radio v-model="questions[i].result"
                        native-value="d">
                          D: {{question.d}}
                    </b-radio>
                </b-field>

            </b-step-item>


            <b-step-item label="Result" icon="stop" >
                
                   <figure class="b-image-wrapper image">
                    <img src="~/assets/QuizResult.png" style="width:500px">
                  </figure>
  
                <div class="box">
                  <b>Which letter was the most common in Your answers???<br>
                    It was...</b>
                </div>

                  <div v-for="(result, i) in results" :key="i">
                      <div class="box"  v-if="isMaxAnswers(questions, result.value)"  > 
                          <b>{{result.text}}</b>
                      </div>
                  </div>

            </b-step-item>
        </b-steps>
    
  </section>
</template>
s
<script>
    export default {
      methods: {
        isMaxAnswers(questions,answer) {
          var counts = {
            a:0, b:0, c:0, d:0
          }
          var i;
          for ( i = 0 ; i < questions.length; i++ ) {
            counts[questions[i].result]++
          }

          var count =  counts[answer]
          for (const [key, value] of Object.entries(counts)) {
            if ( count < value)
              return false
          }

           return true
        }
        },
        data() {
            return {


               questions:[
                    {
                      text: 'When you go to school you wear:',
                      label: 'Fashion',
                      a:'Your favourite hoodie',
                      b:'A power outfit or clothes abiding the newest trend in fashion',
                      c:"Anything which fits you as long as it is comfy and doesn't drag you down",
                      d:'The comfiest stuff in your closet',
                      result : 'a'
                    },

                    {
                       text: "What's your favourite hobby?",
                      label: 'Hobby',
                      a:'Hanging with the bros or gaming till 4 am',
                      b:"Going out with your girlfriends, binging netflix or shopping till there's no money in your wallet",
                      c:'Reading, bullet journalling or scrolling through bookstagram.',
                      d:'Expressing your creative ideas through different activities such as drama, writing, drawing, dancing etc.',
                      result :  'a'
                    },
                    {
                       text: "What’s your favourite subject?",
                      label: 'Subject',
                      a:"No, you'd rather be at home gamin’ with your bros.",
                      b:"Any subject where the teacher lets you laugh or talk to your friends.",
                      c:'Any class which is interesting- especially if you get good grades.',
                      d:'Any creative subject; english, art, music etc.',
                      result :  'a'
                    },
                    {
                       text: "Completing assignments:",
                      label: 'Assignments',
                      a:"Done last minute or after deadline(ehm ehm 3 am.)",
                      b:"Procrastinated but done.",
                      c:'Completed a week ahead or procrastinated to the very last minute.',
                      d:'Whenever, wherever, just get it done.',
                      result :  'a'
                    },
                    {
                       text: "What’s your lunch spot?",
                      label: 'Lunch',
                      a:"At home. You don't bother with cafeteria food.",
                      b:"Eurovea of course.",
                      c:'Cafeteria. You are the first to be out of class and packed and ready for lunch.',
                      d:'You eat at the cafeteria with your squad.',
                      result :  'a'
                    }

                ],

                results: [
                  {
                    value : 'a',
                    text : "A: You’re a part of the hoodie wearing bros who will game with you till 4 am and hang any time..."
                  },
                  {
                   value : 'b',
                    text : "B: You’re a part of the mysterious 8girls and you like to hang out with your friends after school and Netflix & CHILL."
                  },
                  {
                   value : 'c',
                    text : "C: You’re always prepared, you are a part of the brainiacs, your smarts get you great grades though your workload can get a bit tough sometimes."
                  },
                  {
                   value : 'd',
                    text : "D: You’re a part of the talented Creatives; you like expressing your creative ideas and trying new things."
                  }
                ],

                labelPosition: 'right',
                position: null,
                size: null,
            }
        }
    }
</script>