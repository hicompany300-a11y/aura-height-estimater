// FIX: Replaced invalid placeholder content with actual data structures.
// This file now exports 'exercises' and 'quotes' to be used across the application,
// resolving module-not-found errors in other components.
import { Exercise } from '../types';

export const exercises: Exercise[] = [
  {
    title: 'Pelvic Tilt',
    description: 'This exercise helps to stretch and strengthen your lower back and abdominal muscles.',
    duration: 180, // 3 minutes
    image: 'https://w7.pngwing.com/pngs/508/317/png-transparent-hip-pelvic-tilt-pelvis-pelvic-floor-human-leg-others-angle-text-hand.png',
    steps: [
      'Lie on your back with your knees bent and feet flat on the floor.',
      'Tighten your stomach muscles, pressing your lower back into the floor.',
      'Hold for 5 seconds, then relax.',
      'Repeat 10-15 times.'
    ]
  },
  {
    title: 'Hanging Stretch',
    description: 'Hanging from a bar can help decompress your spine and stretch your upper body.',
    duration: 60, // 1 minute
    image: 'https://www.shutterstock.com/image-vector/man-doing-hanging-leg-raises-600nw-1847948245.jpg',
    steps: [
      'Grasp a sturdy overhead bar with both hands.',
      'Let your body hang freely, keeping your arms straight.',
      'Relax your back and shoulders.',
      'Hold for 20-30 seconds, and repeat 2-3 times.'
    ]
  },
  {
    title: 'Cat-Cow Stretch',
    description: 'A gentle stretch that improves posture and balance, great for spine flexibility.',
    duration: 120, // 2 minutes
    image: 'https://spotebi.com/wp-content/uploads/2014/10/cat-back-stretch-exercise-illustration.jpg',
    steps: [
      'Start on your hands and knees in a tabletop position.',
      'Inhale as you drop your belly towards the mat (Cow position).',
      'Exhale as you round your spine toward the ceiling (Cat position).',
      'Continue flowing between Cat and Cow for 1-2 minutes.'
    ]
  },
  {
    title: 'Cobra Pose',
    description: 'This yoga pose strengthens the spine, firms the buttocks, and stretches the chest and abdomen.',
    duration: 180, // 3 minutes
    image: 'https://spotebi.com/wp-content/uploads/2015/12/cobra-pose-bhujangasana.jpg',
    steps: [
      'Lie on your stomach with your hands under your shoulders.',
      'Press your hands into the floor and lift your chest up, keeping your hips on the ground.',
      'Keep your shoulders relaxed and away from your ears.',
      'Hold for 15-30 seconds, then release. Repeat 3-5 times.'
    ]
  },
  {
    title: 'Downward-Facing Dog',
    description: 'A foundational yoga pose that stretches the entire body, particularly the hamstrings, shoulders, and spine.',
    duration: 120, // 2 minutes
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMl1O2zFLJeOcAWN6ISDN7FWEtINCieGehA&s',
    steps: [
        'Start on your hands and knees.',
        'Tuck your toes and lift your hips up and back, forming an inverted V shape.',
        'Keep your head between your upper arms, looking toward your thighs.',
        'Hold for 30-60 seconds, breathing deeply.'
    ]
  },
  {
    title: "Child's Pose",
    description: "A resting yoga pose that gently stretches the back, hips, thighs, and ankles.",
    duration: 180, // 3 minutes
    image: 'https://spotebi.com/wp-content/uploads/2016/01/childs-pose-balasana.jpg',
    steps: [
        'Kneel on the floor, touching your big toes together.',
        'Sit on your heels, then separate your knees about as wide as your hips.',
        'Exhale and lay your torso down between your thighs.',
        'Rest your forehead on the floor and extend your arms forward.',
        'Hold for as long as you like, breathing gently.'
    ]
  },
  {
    title: 'Bridge Pose',
    description: 'Strengthens the back, buttocks, and hamstrings while stretching the chest, neck, and spine.',
    duration: 120, // 2 minutes
    image: 'https://spotebi.com/wp-content/uploads/2015/12/bridge-pose-setu-bandha-sarvangasana.jpg',
    steps: [
        'Lie on your back with your knees bent and feet flat on the floor, hip-width apart.',
        'Place your arms at your sides with your palms down.',
        'Press into your feet and arms to lift your hips off the floor.',
        'Keep your thighs and feet parallel. Hold for up to one minute.'
    ]
  },
  {
    title: 'Standing Forward Bend',
    description: 'Stretches the hamstrings, calves, and hips. It also strengthens the thighs and knees.',
    duration: 90, // 1.5 minutes
    image: 'https://spotebi.com/wp-content/uploads/2016/01/standing-forward-bend-pose-uttanasana.jpg',
    steps: [
        'Stand with your feet hip-width apart.',
        'Exhale and bend forward from your hip joints, not your waist.',
        'If you can, bring your palms or fingertips to the floor beside your feet.',
        'Let your head hang. Hold for 30-60 seconds.'
    ]
  },
  {
    title: 'Swimming',
    description: 'A full-body workout that strengthens your back and elongates your spine without impact.',
    duration: 900, // 15 minutes
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOE70EAy2whm_9zdoQPQGK0H9c_IZxa6cvmQ&s',
    steps: [
        'Perform any stroke like freestyle, backstroke, or breaststroke.',
        'Focus on long, stretched-out movements.',
        'Maintain a steady pace.',
        'Swim for at least 15-20 minutes for a good workout.'
    ]
  },
  {
    title: 'Bird-Dog',
    description: 'A great exercise for improving stability, coordination, and strengthening the core, hips, and back muscles.',
    duration: 180, // 3 minutes
    image: 'https://cdn.mos.cms.futurecdn.net/MK6j3qxhZcoU8mt26MKnyc.jpg',
    steps: [
        'Start on all fours with your hands under your shoulders and knees under your hips.',
        'Engage your core and keep your back flat.',
        'Extend your right arm straight forward and your left leg straight back.',
        'Hold for a few seconds, then return to the start. Repeat on the other side.',
        'Continue for 10-12 reps per side.'
    ]
  },
  {
    title: 'Supermans',
    description: 'This exercise targets the lower back muscles, glutes, and hamstrings, helping to improve posture.',
    duration: 120, // 2 minutes
    image: 'https://spotebi.com/wp-content/uploads/2016/02/superman-exercise-illustration-spotebi.jpg',
    steps: [
        'Lie on your stomach with your arms and legs extended.',
        'Keeping your neck in a neutral position, lift your arms, chest, and legs off the floor.',
        'Hold for 2-5 seconds at the top.',
        'Slowly lower back down. Repeat for 12-15 reps.'
    ]
  },
  {
    title: 'Side Leg Kicks',
    description: 'Strengthens and tones the hips, glutes, and thighs while challenging core stability.',
    duration: 180, // 3 minutes
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2bIQF6oplmqpK5PUcuIlTpdTzbw9AkePpcw&s',
    steps: [
        'Lie on your side with your legs stacked and extended straight.',
        'Prop your head up with your hand or rest it on your arm.',
        'Lift your top leg to hip height and kick it forward twice.',
        'Swing the leg back behind you. That\'s one rep.',
        'Do 15-20 reps and switch sides.'
    ]
  },
  {
    title: 'Wall Sits',
    description: 'An isometric exercise that builds strength and endurance in the quadriceps, glutes, and calves.',
    duration: 120, // 2 minutes
    image: 'https://spotebi.com/wp-content/uploads/2015/05/wall-sit-exercise-illustration.jpg',
    steps: [
        'Stand with your back against a wall.',
        'Slide down until your knees are at a 90-degree angle, as if sitting in a chair.',
        'Keep your back flat against the wall and your feet firmly planted on the ground.',
        'Hold for 30-60 seconds. Rest and repeat.'
    ]
  },
  {
    title: 'Calf Raises',
    description: 'A simple yet effective exercise to strengthen the calf muscles (gastrocnemius and soleus).',
    duration: 120, // 2 minutes
    image: 'https://spotebi.com/wp-content/uploads/2015/05/calf-raises-exercise-illustration.jpg',
    steps: [
        'Stand up straight, then push through the balls of your feet, raising your heels.',
        'Your body should be lifted straight up.',
        'Hold the top position for a moment, then slowly lower your heels back down.',
        'Do 2-3 sets of 15-20 reps.'
    ]
  },
  {
    title: 'Plank',
    description: 'A core-strengthening exercise that works the abs, back, and shoulders, improving posture and stability.',
    duration: 180, // 3 minutes
    image: 'https://spotebi.com/wp-content/uploads/2014/10/plank-exercise-illustration.jpg',
    steps: [
        'Start in a push-up position, but with your weight on your forearms instead of your hands.',
        'Your body should form a straight line from your shoulders to your ankles.',
        'Engage your core by sucking your belly button into your spine.',
        'Hold this position for as long as you can maintain good form.'
    ]
  },
  {
    title: 'Lunges',
    description: 'A great exercise for strengthening your legs and glutes, which helps support your lower back and posture.',
    duration: 240, // 4 minutes
    image: 'https://spotebi.com/wp-content/uploads/2014/10/lunges-exercise-illustration.jpg',
    steps: [
        'Stand with your feet hip-width apart.',
        'Step forward with one leg and lower your hips until both knees are bent at a 90-degree angle.',
        'Ensure your front knee is directly above your ankle and your other knee doesn\'t touch the floor.',
        'Push off your front foot to return to the starting position. Repeat on the other leg.',
        'Do 10-12 reps per leg.'
    ]
  },
  {
    title: 'Squats',
    description: 'A fundamental compound exercise that works the entire lower body and core, promoting good posture.',
    duration: 240, // 4 minutes
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrrW1fltyhAEzG0_3dFz481jqVrjOLOKH_w&s',
    steps: [
        'Stand with your feet slightly wider than your hips, toes pointing slightly out.',
        'Keep your chest up and back straight as you lower your hips as if sitting in a chair.',
        'Go as low as you can comfortably, aiming for your thighs to be parallel to the floor.',
        'Push through your heels to return to the starting position.',
        'Do 2-3 sets of 10-15 reps.'
    ]
  },
  {
    title: 'Jumping Rope',
    description: 'An excellent cardiovascular exercise that also improves coordination, bone density, and posture.',
    duration: 300, // 5 minutes
    image: 'https://spotebi.com/wp-content/uploads/2014/10/jump-rope-exercise-illustration.jpg',
    steps: [
        'Hold the rope handles with a firm grip.',
        'Swing the rope over your head and jump as it comes to your feet.',
        'Keep your jumps low to the ground.',
        'Stay on the balls of your feet.',
        'Start with 1-minute intervals and gradually increase.'
    ]
  },
  {
    title: 'Standing Side Bends',
    description: 'Stretches the oblique muscles and helps to improve flexibility in the spine.',
    duration: 120, // 2 minutes
    image: 'https://liftmanual.com/wp-content/uploads/2023/04/standing-side-bend.jpg',
    steps: [
        'Stand with your feet hip-width apart, holding a light weight in one hand if desired.',
        'Raise your opposite arm straight up.',
        'Slowly bend to the side of the weight, feeling a stretch along your side.',
        'Return to the starting position. Do 10-15 reps and switch sides.'
    ]
  },
  {
    title: 'Thoracic Spine Rotations',
    description: 'Improves mobility in the upper and middle back, which is crucial for good posture and reducing stiffness.',
    duration: 120, // 2 minutes
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3Ydt-cQGgoDjZvpBstvVEK1q8LepX8L5Bg&s',
    steps: [
        'Start on all fours.',
        'Place one hand behind your head.',
        'Rotate your elbow down toward your opposite wrist.',
        'Then, rotate your elbow up toward the ceiling, opening up your chest.',
        'Do 10-12 reps and switch sides.'
    ]
  }
];

export const quotes = [
  {
    text: "The body achieves what the mind believes.",
    author: "Anonymous"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The only bad workout is the one that didn't happen.",
    author: "Anonymous"
  },
  {
    text: "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
    author: "Dwayne 'The Rock' Johnson"
  }
];