
import React from 'react';

export const COLORS = {
  primary: '#2e6417',
  secondary: '#3a7c20',
  light: '#fffff6',
  dark: '#1a1a2e',
  gray: '#7f8c8d',
};

export const JCDLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#2e6417" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.5 9.75C16.6046 9.75 17.5 8.85457 17.5 7.75C17.5 6.64543 16.6046 5.75 15.5 5.75C14.3954 5.75 13.5 6.64543 13.5 7.75C13.5 8.85457 14.3954 9.75 15.5 9.75Z" stroke="#2e6417" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 9.75C9.60457 9.75 10.5 8.85457 10.5 7.75C10.5 6.64543 9.60457 5.75 8.5 5.75C7.39543 5.75 6.5 6.64543 6.5 7.75C6.5 8.85457 7.39543 9.75 8.5 9.75Z" stroke="#2e6417" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 15.75C9.60457 15.75 10.5 14.8546 10.5 13.75C10.5 12.6454 9.60457 11.75 8.5 11.75C7.39543 11.75 6.5 12.6454 6.5 13.75C6.5 14.8546 7.39543 15.75 8.5 15.75Z" stroke="#2e6417" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.5 15.75C16.6046 15.75 17.5 14.8546 17.5 13.75C17.5 12.6454 16.6046 11.75 15.5 11.75C14.3954 11.75 13.5 12.6454 13.5 13.75C13.5 14.8546 14.3954 15.75 15.5 15.75Z" stroke="#2e6417" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 18.25C9.60457 18.25 10.5 17.3546 10.5 16.25C10.5 15.1454 9.60457 14.25 8.5 14.25C7.39543 14.25 6.5 15.1454 6.5 16.25C6.5 17.3546 7.39543 18.25 8.5 18.25Z" stroke="#2e6417" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.5 18.25C16.6046 18.25 17.5 17.3546 17.5 16.25C17.5 15.1454 16.6046 14.25 15.5 14.25C14.3954 14.25 13.5 15.1454 13.5 16.25C13.5 17.3546 14.3954 18.25 15.5 18.25Z" stroke="#2e6417" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const VOICE_OPTIONS = [
  { id: 'Kore', name: 'Kore', description: 'Warm and comforting', gender: 'female', style: 'Gentle' },
  { id: 'Puck', name: 'Puck', description: 'Clear and energetic', gender: 'male', style: 'Narrative' },
  { id: 'Charon', name: 'Charon', description: 'Deep and authoritative', gender: 'male', style: 'Sermon' },
  { id: 'Kore', name: 'Kore (Alt)', description: 'Expressive and friendly', gender: 'female', style: 'Inspiring' },
  { id: 'Fenrir', name: 'Fenrir', description: 'Calm and steady', gender: 'male', style: 'Meditation' },
  { id: 'Zephyr', name: 'Zephyr', description: 'Bright and youthful', gender: 'female', style: 'Storytelling' },
];

export const UPLIFTING_MESSAGES = [
  "Gathering divine inspiration...",
  "Polishing your message with grace...",
  "Tuning the frequencies of faith...",
  "Preparing the voice of testimony...",
  "Letting the spirit flow through the text...",
  "Bridging technology and devotion...",
  "Refining your script for maximum impact...",
  "Awakening the echoes of truth...",
  "Crafting a resonance for your listeners..."
];

export const GUIDE_ACTIONS = [
  { action: "Focus", motivation: "You’re doing great — keep going.", next: "Write a few clear lines, then refine." },
  { action: "Breathe", motivation: "One step at a time. You’ve got this.", next: "Finish your draft, then move forward." },
  { action: "Simplify", motivation: "Small progress builds strong results.", next: "Shorten one sentence, then continue." },
  { action: "Sharpen", motivation: "Steady focus brings clarity.", next: "Edit for clarity, then go to Voice." },
  { action: "Encourage", motivation: "Your message matters. Keep refining.", next: "Polish the tone, then generate audio." },
  { action: "Commit", motivation: "Almost there — stay consistent.", next: "Select a voice, then create the audio." },
  { action: "Proceed", motivation: "Great momentum. Keep moving forward.", next: "Preview the result, then download." },
  { action: "Finish", motivation: "You’re on track — finish strong.", next: "Review the output, then save it." },
  { action: "Clarity", motivation: "Keep it simple and clear.", next: "Trim extra words, then continue." },
  { action: "Advance", motivation: "Nice work — let’s move to the next step.", next: "Move to the next step now." }
];

export const PREMADE_STORIES = [
  {
    id: 'story-1',
    title: 'Story 1: The Prayer of the Lost Coin',
    text: `An elderly widow named Marta kept a small clay jar on her windowsill. Every evening, she would drop a single, worn copper coin into it—a practice started after her husband’s passing. It wasn't savings; it was a prayer. Each coin represented a worry released, a fear surrendered. Over years, the jar grew heavy. One harsh winter, with no food left, she finally tipped the jar out, expecting to buy a meager loaf. But as the coins clattered onto the table, they gleamed not copper, but gold. God had not multiplied her money in the jar; He had transformed her prayers in the waiting. The true provision was not the sudden gold, but the steadfast faith that filled her each time she let a worry go.`,
  },
  {
    id: 'story-2',
    title: "Story 2: The Carpenter's Measure",
    text: `Brother Elias, a monk known for his fine carpentry, was asked to build a prayer bench for the chapel. The abbot gave him specific, ample dimensions. Yet, as Elias worked, he thought, "The chapel is small. A smaller bench would save space." He trimmed the measurements. When finished, the bench was sturdy and elegant, but oddly short. The abbot said nothing. That evening, the tallest monk knelt for prayers, his knees aching, his spirit cramped. Elias saw that by diminishing the given measure, he had constrained a brother's encounter with God. The next day, he dismantled it, built anew to the full specifications. Sometimes, our compromises limit not us, but another's grace.`,
  },
  {
    id: 'story-3',
    title: 'Story 3: The Unwatered Seeds',
    text: `A young, zealous believer named Sofia felt called to "sow seeds of the Gospel" everywhere. She left tracts in cafes, quoted verses online, spoke quickly to strangers. But she felt weary, seeing little growth. One day, an older gardener at her church showed her a dry, barren patch of soil. "I scattered seed here every day for a week," he said. "Yet, nothing." He then showed her a thriving plot, fragrant with basil and rosemary. "Here, I sowed once, then watered, weeded, and tended every day." Sofia understood. Faithfulness isn't in the volume of seed scattered, but in the patient, often unseen, ministry of watering what is already planted.`,
  },
  {
    id: 'story-4',
    title: 'Story 4: The Cracked Church Bell',
    text: `In a village nestled in the hills, the ancient church bell developed a crack. Its once clear, resonant call to worship became a dull, jarring clang. The villagers lamented. "We must save to recast it!" they said. But the old priest insisted on ringing it still. At first, people winced. But over time, they noticed something. The flawed bell had a unique sound—raw, vulnerable, almost pleading. It no longer just announced time; it mirrored their own brokenness, calling them not to perfect ceremony, but to a community of mended hearts. God doesn't demand perfect instruments. He uses our cracks to sound a more compelling grace.`,
  },
  {
    id: 'story-5',
    title: "Story 5: The Lighthouse Keeper's Son",
    text: `A lighthouse keeper's son loved to watch his father trim the wick, polish the glass, and light the great lamp each dusk. "Father, let me light it tonight!" he begged. "Not yet," his father said. One stormy evening, his father fell ill. The boy, seizing his chance, rushed to the tower. But in his haste, he overfilled the oil reservoir. The lamp flared, smoked, and sputtered out, plunging the coast into darkness. As a ship's horn blared in panic, his father staggered in, calmly cleared the wick, and relit the flame. "Zeal without wisdom," he whispered, "can leave others in the dark. Love is measured in steady light."`,
  },
  {
    id: 'story-6',
    title: 'Story 6: The Parable of Two Bakers',
    text: `Two bakers opened shops on the same street. Anna baked to show her supreme skill. Her bread was complex, her pastries intricate. She hung awards on the wall. Clara simply baked "daily bread," praying over each loaf, "Lord, let this nourish body and soul." Over time, Anna's shop had critics and admirers. But Clara's shop had a line—of the lonely, the weary, the grieving. They said her plain bread tasted of hope. Anna baked for the spectacle of the feast. Clara baked for the necessity of the journey. God often works not in the spectacular, but in the sustenance of simple, prayer-filled offerings.`,
  },
  {
    id: 'story-7',
    title: 'Story 7: The Silent Choir Member',
    text: `Leo had a deep, beautiful singing voice, but an accident damaged his vocal cords. He could only whisper. Devastated, he stopped attending his church choir. The director visited him. "Leo, the choir isn't a museum for perfect voices. It's a body. We need you." The next rehearsal, Leo stood with them, his lips moving in silent unison. The director said, "Listen." The singers strained to hear their own harmony, to blend more carefully. Their sound grew richer, more attentive. Leo's silence taught them to truly listen—to each other, and to the Spirit moving between the notes. Sometimes, our greatest contribution is the space our lack creates for others to grow.`,
  },
  {
    id: 'story-8',
    title: 'Story 8: The Weathered Bible',
    text: `At a yard sale, a man bought a battered Bible for a quarter. Its pages were water-stained, notes crammed in margins, whole chapters underlined in fading ink. Annoyed by the "clutter," he decided to copy out only the "clean" verses into a new journal. But as he worked, he realized the notes told a story: "Trusted Him here, 1982." "Prayed this over my sick child." "Forgave J." The stains were tear marks. The underlined promises were lifelines. He stopped writing. The power wasn't in the pristine text alone, but in the testament of a life lived with it. God's Word is alive not on blank pages, but in the messy, faith-worn chapters of our lives.`,
  },
  {
    id: 'story-9',
    title: "Story 9: The Gardener's Strange Pruning",
    text: `A novice gardener was horrified to see the master gardener ruthlessly cut back the healthiest rose bush, leaving only stark stems. "Why? It was flourishing!" he cried. "It was flourishing leaves," the master replied. "Its energy was going to foliage, not bloom. It forgot its purpose." The novice didn't understand until spring, when that bush exploded with more magnificent, fragrant roses than any other. God, the Master Gardener, sometimes cuts back what seems good and strong so that our energy is redirected from mere survival to our true purpose: bearing fragrant fruit that points to Him.`,
  },
  {
    id: 'story-10',
    title: "Story 10: The Two Travelers' Prayer",
    text: `Two men embarked on a perilous mountain pilgrimage. The first prayed every morning, "Lord, make my path smooth and easy. Remove the stones and the steep climbs." The second prayed, "Lord, give me strong legs for the stones, steady breath for the climb, and eyes to see your glory in the heights." The first traveler grew frustrated at every obstacle, believing his prayers were unanswered. The second found strength in the struggle and wonder at each new vista. Both arrived, but only one was transformed by the journey. God does not always change our path. He often chooses to equip us for it, which is the greater answer.`,
  },
  {
    id: 'story-11',
    title: 'Story 11: The Mended Net',
    text: `After a terrible storm, fisherman Peter found his nets torn to shreds. "Useless," he muttered, ready to burn them. His wife, Mary, began the tedious work of knotting them back together. "It's a waste of time!" Peter said. But she persisted, knot by slow knot. The next season, Peter cast the mended net. It held a miraculous catch. Later, he told the story, "The net that had been broken held more than any new one ever could." The places where we have been torn and mended by faith and perseverance become the strongest points of our testimony, capable of holding God's greatest blessings.`,
  },
  {
    id: 'story-12',
    title: 'Story 12: The Overlooked Altar',
    text: `In a grand cathedral, tourists marveled at the golden high altar. But in a shadowy side chapel, a small, plain altar of rough stone stood, forgotten. A caretaker explained its story: centuries ago, when persecution raged, believers secretly gathered there. The stone was stained with their whispered prayers and perhaps their tears. The grand altar spoke of God's glory. The rough altar spoke of God's nearness. He is found not only in triumphant splendor, but more intimately in the hidden places of desperation and secret faith. The most powerful altar is the one where a contrite heart meets a faithful God.`,
  },
  {
    id: 'story-13',
    title: 'Story 13: The Song of the Nightingale',
    text: `A preacher renowned for his eloquent sermons grew jealous of a humble nun who spent hours in the garden, singing simple hymns. People seemed more drawn to her song than his words. "Lord," he complained, "I craft deep truths. She just repeats simple melodies." That night, he dreamed of a grand orchestra playing a complex symphony, yet the people covered their ears. Then a single nightingale sang, and all hearts melted. God spoke: "You compose for the mind. She sings for the heart I made. The pathway to a weary soul is often a simple, sincere song, not a complex argument."`,
  },
  {
    id: 'story-14',
    title: 'Story 14: The Unlocked Gate',
    text: `A monastery had a strict rule: the main gate was locked at sundown. One icy winter night, the monk on duty heard faint knocking long after dark. Peering out, he saw a traveler, half-frozen. Torn between rule and mercy, he ran to wake the abbot. "The rule is for our protection, but compassion is our purpose," the abbot said. "Open the gate." They nursed the stranger, who turned out to be a prince in disguise. His subsequent generosity transformed the monastery. The rule kept them safe, but only the risk of compassion could fulfill their calling. Legalism bars the door; love opens it to God's surprises.`,
  },
  {
    id: 'story-15',
    title: "Story 15: The Potter's Favorite Clay",
    text: `A student potter was fascinated by a lump of coarse, brown clay the master kept on a high shelf. "Why save that? It's ugly and gritty." The master smiled, took it down, and began to work it. Under his skilled, patient hands, it became a stunning vase with a deep, complex glaze no fine clay could achieve. "This clay," the master said, "has impurities that, when surrendered to the fire, create unique colors and strength. I don't cherish it in spite of its flaws, but because of what they become in the process." God sees not what we are, but what His hands and fire can make of us.`,
  },
  {
    id: 'story-16',
    title: 'Story 16: The Forgotten Well',
    text: `A village abandoned its ancient well when a modern water system was installed. The well was boarded up, forgotten. Years later, the pipeline broke. Parched, the villagers remembered the old well. With fear, they unsealed it. To their amazement, they found it not dry, but brimming with cool, sweet water, filtered pure through decades of quiet seepage. Our spiritual disciplines—prayer, scripture, silence—may seem obsolete in an age of instant gratification. But when crisis dries up newer sources, those deep, forgotten wells of faithfulness provide living water that never fails.`,
  },
  {
    id: 'story-17',
    title: "Story 17: The Shepherd's Lost Lamb",
    text: `A shepherd had one hundred sheep. When one went missing, he left the ninety-nine to find it. The parable is familiar. But imagine the lost lamb's perspective. It wasn't willfully rebellious; it had simply stumbled into a hidden crevice. It heard the shepherd's call but was too terrified and ashamed to bleat. The shepherd searched not because the lamb was worthy, but because his nature was to seek. Our hiding is often born of fear, not defiance. And our rescue is always because of who He is, not because we finally found our voice.`,
  },
  {
    id: 'story-18',
    title: 'Story 18: The Candle in the Library',
    text: `A young scholar sought God in books of theology and philosophy. He filled his mind but felt his heart grow cold. One evening, a power outage plunged his library into darkness. Fumbling, he found a single candle. In that soft, small circle of light, he could read nothing. He just sat. In the quiet, warm glow, a profound peace settled on him. He realized he had been seeking the blueprint of the sun while ignoring the simple candle flame that could actually light his immediate darkness. God is not only found in vast knowledge, but in the intimate, immediate light of His presence.`,
  },
  {
    id: 'story-19',
    title: "Story 19: The Builder's Foundation",
    text: `Two friends built houses on adjacent plots. The first, eager to see walls rise, skimped on the foundation, digging just a few feet. The second, patient and meticulous, dug deep into the bedrock, a frustrating, unseen labor. The first laughed at his friend's "slow" progress. But when the storm and flood came, the first house washed away in a torrent. The second stood firm, its foundation unmoved. Our visible, fast progress in life means little. The depth and strength of our private foundation—our character, prayer life, and trust in Christ—determines whether we will stand when the inevitable storms arrive.`,
  },
  {
    id: 'story-20',
    title: 'Story 20: The Gift of the Myrrh Tree',
    text: `In a desert land, a wise man gave his three sons saplings: one an olive, one a fig, and the youngest, a myrrh tree. The myrrh tree's sap was bitter, its smell pungent. The youngest son felt cheated. Years passed. The olive and fig bore delicious fruit. The myrrh tree only oozed resin. When the father fell deathly ill, no medicine helped. In despair, the youngest son collected his tree's resin. A traveling physician identified it as precious myrrh, a powerful healing agent. It saved the father's life. What God plants in our lives that seems bitter or useless may one day prove to be the very thing that brings healing.`,
  }
  ,
  {
    id: 'story-21',
    title: 'Story 21: The Two Wells of Mercy',
    text: `In a drought-stricken land, two neighboring villages each had a well. The first village posted a guard, rationing water only to its own citizens. The second village, led by an elder who quoted, "Give, and it will be given to you," allowed any traveler to drink. The first village's well, hoarded and stressed, began to silt up and run low. The second village's well, through constant, generous use, seemed to tap into a deeper underground stream and never ran dry. Their act of mercy kept the water flowing, not just for others, but for themselves. God's economy is paradoxical: what is clutched tightly diminishes; what is given freely multiplies.`,
  },
  {
    id: 'story-22',
    title: 'Story 22: The Mosaic Artist',
    text: `An artist commissioned to create a mosaic for a cathedral courtyard dropped his prized box of imported, colorful tiles. They shattered into thousands of tiny, sharp pieces. In despair, he saw his vision ruined. An old monk walking by knelt and began sorting the shards by color. "Now you have more pieces to work with," he said. "The original design relied on the tiles' perfection. Now, you must create a new picture that relies on the Master's grace to fit broken things together." The resulting mosaic, a stunning depiction of the Phoenix rising, was more breathtaking because every gleam of light came from a place of fracture.`,
  },
  {
    id: 'story-23',
    title: 'Story 23: The Unread Sermon',
    text: `Pastor David spent all Saturday crafting a perfect sermon. That night, he sat with a dying church member, holding her hand in silence until dawn. Exhausted, he arrived at church with no time to review his notes. As he preached, his words felt flat, his delivery clumsy. After the service, a young man approached, tears in his eyes. "Thank you. When you spoke of God's presence in our weakness, it was exactly what I needed. It felt... real." David realized the most powerful sermon he'd preached wasn't the one he wrote, but the one lived in a vigil of love. Authenticity resonates louder than eloquence.`,
  },
  {
    id: 'story-24',
    title: "Story 24: The Clockmaker's Daughter",
    text: `A clockmaker's daughter loved to watch the intricate gears of his master clock. "Every gear has a purpose," he told her. One day, a tiny, obscure gear broke. The clockmaker replaced it with a new, shiny one. But the clock ran fast, then slow, then stopped. The new gear was perfect in form, but not tempered by time. He searched his workshop and found the original gear's twin, worn and aged from an old clock. It fit perfectly, and the great clock ticked steadily again. In the Body of Christ, the humble, seasoned believer, worn by years of faithful service, often holds more wisdom and keeps better time than the untested newcomer.`,
  },
  {
    id: 'story-25',
    title: 'Story 25: The Field of Hidden Treasure',
    text: `A man dreamed of a treasure buried in a distant field. He sold all he had, bought the field, and dug frantically. Days passed, finding nothing. Broke and exhausted, he sat in the mud. As the sun set, it glinted not on buried gold, but on the rich, black soil itself. He had been so fixated on a single prize that he failed to see the wealth he now owned: acres of fertile land. He planted seeds, and in time, the harvest made him truly prosperous. God's promised treasure is often not a hidden lump sum, but the faithful cultivation of the very ground He has given us.`,
  },
  {
    id: 'story-26',
    title: 'Story 26: The Lighthouse in the Valley',
    text: `A coastal town moved their lighthouse inland to a high hill, believing its light would shine farther. But on the hill, it was often shrouded in clouds. Shipwrecks increased. An old sailor finally said, "A lighthouse belongs where the danger is—by the jagged rocks in the valley of the shadow." They moved it back to the perilous shore. Its light, though lower, cut through the fog and saved countless ships. The church is not called to shine from a safe, removed height of moral superiority, but to stand in the darkest, most treacherous places with the light of Christ.`,
  },
  {
    id: 'story-27',
    title: 'Story 27: The Parable of the Two Musicians',
    text: `Lydia played the violin with technical perfection but little heart. Marco played the same instrument with less precision but such passion that listeners were moved to tears. Lydia practiced in isolation; Marco played in hospitals and shelters. One day, a great master heard both. To Lydia he said, "You command the instrument." To Marco he said, "The music commands you. And through you, it heals." Our faith is an instrument. It can be an object of flawless personal discipline, or it can be a conduit for a Master's healing melody to a hurting world. The latter is the higher calling.`,
  },
  {
    id: 'story-28',
    title: 'Story 28: The Guardian of the Seed',
    text: `An ancient order was tasked with guarding a single, sacred seed from a legendary tree of life. For generations, protectors kept it in a velvet-lined vault. It became a relic to be preserved, not a seed to be planted. A young initiate, studying the original scrolls, read, "Plant it in the year of great famine." A famine was raging. Against all tradition, she took the seed and planted it in the barren soil outside the monastery walls. The elders were furious—until a sapling sprouted, grew with miraculous speed, and bore fruit that fed the entire region. Faith is not a museum piece. It must be risked in the soil of present need to bear future life.`,
  },
  {
    id: 'story-29',
    title: "Story 29: The Weaver's Mistake",
    text: `A novice weaver, creating a tapestry of the Nativity, made a terrible error. A bright red thread was woven in the wrong place, a jarring flaw in the midnight blue sky. She wept, sure the piece was ruined. The master weaver examined it, then quietly continued the red thread, weaving it downward to become the guiding line of a shepherd's staff pointing toward the manger. The mistake became part of the story. Our errors and sins are not the end of God's design. In His hands, they can be rewoven into the narrative, pointing ourselves and others toward redemption.`,
  },
  {
    id: 'story-30',
    title: 'Story 30: The Quietest Prayer Meeting',
    text: `In a city known for its massive, energetic prayer rallies, a small group met in a basement. They rarely petitioned; they mostly sat in silence, listening. A seeker, disillusioned by spectacle, stumbled in one night. The silence felt heavy at first. Then, he felt a profound peace he'd never known. "What do you do here?" he whispered. The leader replied, "We make space for God to speak. Most places are so full of words, He can't get a whisper in." Our spiritual lives are often cluttered with our own noise. The most powerful prayer may be the one that creates a listening silence.`,
  },
  {
    id: 'story-31',
    title: 'Story 31: The Bridge of Stones',
    text: `Two mountain villages, divided by a deep ravine, lived in suspicion. A traveling preacher suggested building a bridge. Both villages laughed. "Impossible!" But the preacher began alone, carrying a single stone to the cliff's edge. Day after day, he did this. Moved first by mockery, then by curiosity, then by shame, individuals from both sides began to add stones. The work became a silent joint project. When the bridge was finished, no one remembered who placed the first stone. They only knew they had built it together. Reconciliation rarely starts with a grand treaty. It starts with one person laying down a single, stubborn act of grace.`,
  },
  {
    id: 'story-32',
    title: 'Story 32: The Book of Lamentations',
    text: `A church kept a beautiful "Book of Joys" in the lobby for answered prayers. In a back closet, an old pastor kept a simple, worn notebook—his "Book of Lamentations." It held unspeakable griefs: "Why, Lord?" and "How long?" written over decades. When he died, his successor found it. Reading it, he didn't find despair, but a startling pattern: every entry of anguish was followed, pages or years later, by a small, penciled note: "I see now," or "Thank you for the strength that came." The Book of Joys celebrated the victory. The Book of Lamentations charted the faith that fought for it.`,
  },
  {
    id: 'story-33',
    title: 'Story 33: The Overlooked Saint',
    text: `In a bustling church, everyone admired Pastor Thomas and Worship Leader Sarah. Few noticed elderly Brother Henry, who arrived early to straighten chairs and left late to take out the trash. When Henry passed, the church held a memorial. Person after person stood: the single mom he secretly helped with rent, the teenager he mentored in the park, the neighbor he prayed for daily. His quiet, unseen ministry had woven a web of grace that held the community together. The most vital threads in the tapestry of a church are often the ones unseen from the front.`,
  },
  {
    id: 'story-34',
    title: "Story 34: The Fisherman's Knot",
    text: `A seasoned fisherman taught his grandson to tie knots. "This one," he said, holding up a complex, beautiful knot, "is for show. It wins competitions. But this one," he said, tying a simple, ugly knot, "is for life. It holds under pressure and is easy to untie when you need to change." Our faith needs fewer decorative, complicated theologies we tie to impress, and more of the simple, tested knots of trust, forgiveness, and love that hold fast in a storm and allow us to adapt when God calls us to a new task.`,
  },
  {
    id: 'story-35',
    title: 'Story 35: The Desert Bloom',
    text: `A botanist studied a rare desert flower that bloomed only once every seven years, and only after the most severe drought. She asked a local Bedouin why this was. He said, "The flower's roots go deep, seeking water. In easy times, the roots stay shallow. Only when the surface is completely parched do they drive down to the deep, ancient reservoirs. The bloom is not in spite of the drought, but because of it." Our most beautiful seasons of spiritual fruit often come not when life is easy, but when surface comforts dry up, forcing our roots down to the deep waters of God.`,
  },
  {
    id: 'story-36',
    title: "Story 36: The Blacksmith's Choice",
    text: `A blacksmith had two pieces of iron. One he left on the shelf. The other he placed in the fire, hammered on the anvil, and plunged into cold water. The first remained smooth and intact but useless. The second, now a strong sword, bore the marks of fire and hammer. "Why did you ruin that one?" an apprentice asked. "I didn't ruin it," said the smith. "I chose it." God does not punish us with trials; He chooses us for purpose. The fire, the hammer, and the quenching are not signs of abandonment, but the process of being shaped into a useful instrument.`,
  },
  {
    id: 'story-37',
    title: 'Story 37: The Echo in the Canyon',
    text: `A man angry at God shouted his accusations into a canyon: "Why have you forsaken me?!" The canyon echoed back, "Forsaken me!" Startled, he felt even more alone. A shepherd sitting nearby said, "Now shout, 'I trust you!'" The man, hesitantly, did. The canyon echoed, "Trust you!" "The canyon," said the shepherd, "only gives back what you send into it. So does the universe. Your heart's deepest cry shapes the echo you hear. Send forth trust, and trust is what will eventually return to you."`,
  },
  {
    id: 'story-38',
    title: 'Story 38: The Keeper of the Spring',
    text: `High above a thriving village, an old man named Elias tended a mountain spring, clearing debris to keep the water pure. The village council, reviewing budgets, deemed his salary unnecessary. "The water runs by itself!" they said. They fired him. Within a year, the spring clogged, the water slowed, then turned foul. Disease spread. Humbled, they reinstated Elias. He cleared the blockage, and clean water flowed again. The unseen, thankless ministries of prayer, intercession, and spiritual maintenance are not luxuries. They are the vital work that keeps the living water flowing to the whole body.`,
  },
  {
    id: 'story-39',
    title: 'Story 39: The Two Builders of the Wall',
    text: `Enemies threatened a town. Two builders rushed to repair the crumbling wall. The first worked on the section facing the main road, making it impressively tall and strong. The second worked on the back section, in a muddy, obscure area. When the attack came, the enemy simply went around to the weak, neglected back wall and breached it. We often fortify the parts of our lives visible to others—our reputation, public piety—while leaving the private, hidden areas of our character vulnerable. True security comes from shoring up the walls no one sees.`,
  },
  {
    id: 'story-40',
    title: 'Story 40: The Gift of the Empty Hands',
    text: `At the annual feast, villagers presented gifts at the temple: produce, crafts, coins. Anna, a poor widow, came with nothing. When her turn came, she simply held out her empty, work-worn hands. Some scoffed. The high priest, however, paused. "These hands," he said, "have rocked orphans, tended the sick, and scrubbed floors to feed her family. They are not empty. They are full of the labor of love, which is the truest offering." She gave what she had: herself. God does not measure our offering by its volume in the plate, but by the love poured through our lives.`,
  }
  ,
  {
    id: 'story-41',
    title: "Story 41: The Potter's Unfinished Vessel",
    text: `In the studio of Master Potter Eli, a special vessel sat on the shelf for years. Apprentices would ask, "Master, when will you finish it?" The jar had a graceful shape, but its surface was rough, unglazed, bearing the fingerprints of its initial forming. Eli would simply smile and say, "It is not yet time." One harsh winter, a plague swept the village. Medicines were stored in fine, glazed pots, but lost their potency. In desperation, the village healer came to Eli. "I need a vessel that breathes," she said, "to store this poultice of herbs." Eli took down the unfinished jar. Its porous clay allowed the medicine to mature and preserved its healing properties perfectly. He explained, "I left it unfinished because I foresaw a need only its roughness could meet. What the world sees as incomplete, God has crafted for a purpose not yet revealed."`,
  },
  {
    id: 'story-42',
    title: 'Story 42: The Bells of the Sunken Cathedral',
    text: `Legends spoke of a cathedral that had sunk into a coastal marsh centuries ago, its bells still ringing mysteriously at high tide. A skeptical scholar, Dr. Aris, came to study the phenomenon. Locals said the bells rang with the prayers of the saints. Aris set up recording equipment. During a storm, he captured the sound—not just a random clang, but a faint, harmonic chorus. As he analyzed it, a storm surge flooded his cabin. Trapped, he despaired. Then, through the howling wind, he heard the bells clearly, their resonance seeming to calm the raging water around him. He was rescued at dawn. In his report, he wrote: "I went to study a myth and encountered a mystery. The bells do not ring from motion, but from memory. The faithful prayers offered in that place were absorbed into the very stones, and in times of turmoil, the world itself echoes them back. Faith, it seems, can resonate beyond time."`,
  },
  {
    id: 'story-43',
    title: 'Story 43: The Keeper of the Forgotten Names',
    text: `In a sprawling city church, Brother Matthias had a ministry no one fully understood. He sat in a back office with old directories, rolls of faded paper, and a simple ledger. For hours each day, he wrote down names—names of former members who had moved away, of the sick who were no longer visited, of the grieving who had stopped attending. He would then pray over each name, one by one. New pastors would try to redirect his "inefficient" work. But over decades, a pattern emerged. People would return to the church after years, saying, "I felt a pull to come back. I felt… remembered." A missionary, home on leave, once broke down in tears when Brother Matthias greeted him by name and asked about his mother who had died years prior. "In an age of databases," the old pastor finally said, "Matthias keeps the soul of the church. He turns a membership roll into a prayer scroll. He reminds us that in the eyes of God, no one is ever archived."`,
  },
  {
    id: 'story-44',
    title: 'Story 44: The Weighed Flour',
    text: `During a famine, a baker named Simon was the only one with a sizable store of wheat. He vowed to help his neighbors by selling bread at cost. To be fair, he used his own brass weight to measure out flour for each family. His wife, Leah, noticed the weight looked dull. She polished it vigorously, revealing it was not solid brass, but a brass shell over a core of lead—it was heavier than standard. For years, Simon had been giving more than he intended. Horrified, he ran to confess to the priest. The priest listened, then asked, "During the years you used the heavy weight, did you go hungry?" "No," said Simon. "Your business thrived?" "Yes," he replied. "The Lord did not bless you for your deception," the priest said gently. "He blessed the generosity you never knew you had. Sometimes, God's grace works through our honest mistakes to fulfill a secret covenant of kindness we made with Him in our hearts."`,
  },
  {
    id: 'story-45',
    title: 'Story 45: The Mason and the Mortar',
    text: `Two masons were hired to repair the great wall of a monastery. The first, Carlo, was fast and proud. He used ample mortar, making his sections look smooth and strong quickly. The second, Finn, was slow and meticulous. He used the minimum mortar necessary, ensuring each stone fit perfectly against its neighbor. The abbot praised Carlo's speed. Winter came with fierce freeze-thaw cycles. In spring, Carlo's sections crumbled, the mortar cracked from within. Finn's sections stood solid, the stones themselves bearing the load. The abbot understood. Carlo's work was about appearance, relying on a weak binder. Finn's work was about integrity, relying on the true connection between the stones. Our spiritual lives can look impressive with the "mortar" of busy activity, but only true communion with Christ and others—the careful fitting together—withstands the seasons of stress.`,
  },
  {
    id: 'story-46',
    title: 'Story 46: The Librarian of Lost Stories',
    text: `In the Vatican's deepest archives, there was said to be a librarian who did not catalog books, but stories—specifically, stories of prayers that seemed to go unanswered. A young theologian, grappling with his own unanswered prayer, sought him out. He found an old man in a small, windowless room filled with scrolls and journals. "How do you organize them?" the theologian asked. "By feeling," the librarian said. "This shelf is 'Anguish.' That corner is 'Bewilderment.' That trunk is 'Silent Longings.'" "But what is their purpose?" the young man pressed. The librarian took down a scroll from the "Anguish" shelf. It detailed a mother's prayer for her sick child in the 4th century. The child died. He then produced a later document—a letter from a monk, citing that mother's lament in a treatise that comforted thousands during the plague. "See," the librarian whispered, "No prayer is lost. Some are answered in ways we see. Others are woven into a tapestry of comfort we cannot yet perceive. They become the threads God uses to mend the torn faith of others, sometimes centuries later. Your unanswered prayer may be the very thread He needs for someone else's healing."`,
  },
  {
    id: 'story-47',
    title: "Story 47: The Gardener's Second Spring",
    text: `Old Samuel's garden was the pride of the village. But one year, a late frost blackened every blossom on his prized peach trees. The villagers mourned with him, sure there would be no fruit. Samuel, however, did not rest. He pruned the damaged branches with care, watered, and waited. To everyone's astonishment, the trees, as if in defiance, bloomed again six weeks later—a rare second spring. That autumn, the peaches were fewer, but each one was larger, sweeter, and more intensely fragrant than any before. "The frost," Samuel explained, "did not kill the tree's desire to bear fruit. It only killed its first, easy effort. The fruit that comes after suffering is often the one that holds the deepest flavor." God is the gardener who knows that the fruit born out of resilience has a sweetness that easy seasons cannot produce.`,
  },
  {
    id: 'story-48',
    title: 'Story 48: The Clock with Two Faces',
    text: `In the town square stood an antique clock with two faces, facing east and west. Over time, the eastern face, kissed by the morning sun, kept perfect time. The western face, battered by prevailing rains, fell behind, then stopped. The town argued: some said remove the broken face; others said repair the whole clock. A humble clockmaker proposed a third way. He left the eastern face as the accurate timekeeper. For the western face, he removed its broken hands and inscribed on the still glass: "The time for mercy is now." The clock became a legend. It taught that while we must be diligent with our God-given time (the eastern face), our primary calling to a waiting world is not to display our own perfect functioning, but to reflect a timeless truth: that in Christ, it is always the hour for grace.`,
  },
  {
    id: 'story-49',
    title: 'Story 49: The Bridge of Whispering Willows',
    text: `Two villages, separated by a river, were connected by a bridge made of living willow trees, woven together by ancestors. The willows would whisper in the wind. After a conflict, the villages fell out, and the bridge was neglected. Thorns overgrew it, and the whispers turned to mournful groans. A child from one village, curious about the sounds, began to clear the thorns. A child from the other side did the same. They met in the middle. As they worked, the willows, sensing the care, began to plump with new leaves. Soon, elders from both villages, shamed by the children's initiative, came to help. As the bridge was restored, the whispers returned—but now they sounded like shared laughter. The pastor said, "Reconciliation is not a structure we build from scratch. It is a living bridge, woven by those before us, that we must choose to clear of bitterness and tend together. Its voice changes with our care."`,
  },
  {
    id: 'story-50',
    title: 'Story 50: The Stained-Glass Cracks',
    text: `The cathedral's great rose window was a masterpiece. After an earthquake, a web of fine cracks radiated through the central panel depicting Christ. The bishop despaired, fearing it was ruined. A master glass artisan from a distant country was summoned. She studied it for days. Instead of replacing the pane, she used a technique called kintsugi, filling the cracks with resin infused with gold dust. When the sun rose the next Sunday, the congregation gasped. The cracks, now lined in gold, caught the morning light in a new way, making the face of Christ appear to be illuminated from within by a radiant, fractured glory. The bishop preached: "We thought the quake had broken our window. But the Master Artisan used the breaks to multiply the light. Our brokenness, when surrendered, does not diminish His glory. It becomes the very channel through which His golden grace shines most brilliantly."`,
  },
  {
    id: 'story-51',
    title: "Story 51: The Shepherd's Songbook",
    text: `A shepherd named Jonas was known for his beautiful voice, singing psalms on the hills. Over the years, tragedy struck—he lost his wife, then his home to fire. His voice grew rough with grief; he could only manage hoarse whispers. He stopped singing publicly. One night, a lost traveler, cold and afraid, stumbled into his valley. From the darkness, the traveler heard not a melody, but a raw, whispering recitation of the old psalms—the words of lament and hope ground fine by sorrow. The traveler followed the sound to Jonas's fire. "Your song," the traveler said, "it had no tune, but it led me to safety." Jonas realized his broken voice could no longer create beauty, but it could still carry truth. And truth, even whispered, is a beacon. Our testimonies are most powerful not when they are perfectly pitched, but when they are authentic roadsigns carved by real struggle.`,
  },
  {
    id: 'story-52',
    title: 'Story 52: The Well of Returning',
    text: `In a desert monastery, the rule was strict: after drawing water from the deep well, each monk had to pour one cupful back down into the darkness. A new novice thought this wasteful. "Why return what we've drawn? The well is fed by a spring." The abbot said, "It is not for the well. It is for you. The act of returning teaches gratitude—that the water is a gift, not a possession. It acknowledges the source. And the sound of that water falling in the dark is the sound of faith—giving back without seeing an immediate result." Our spiritual disciplines—prayer, giving, worship—are often like that poured cup. They are not to fill God's need, but to shape in us the memory of the Source and the rhythm of trust.`,
  },
  {
    id: 'story-53',
    title: 'Story 53: The Map of the Uncharted Forest',
    text: `An old explorer gave his grandson a map of the dense forest bordering their village. The central area was blank, labeled only, "Here, you must walk without the map." The grandson protested, "What good is a map that leaves out the hardest part?" The explorer said, "The map gets you to the edge. It shows the safe paths others have walked. But the heart of the forest, where the truest treasures and trials are, must be navigated by a different compass—the one in your spirit, attuned to the whispers of God. I cannot chart that for you. Faith is not following a prescribed route through the unknown; it is trusting the Guide in the very midst of it."`,
  },
  {
    id: 'story-54',
    title: "Story 54: The Blacksmith's Second Metal",
    text: `A legendary sword was said to be unbreakable. Its secret, lost for ages, was rediscovered by a historian. The smith hadn't used one pure metal, but had forged the core from flexible iron, then wrapped and welded it in a shell of hard, brittle steel. The historian explained: "The hard steel gives the edge and withstands blows. But when a impact comes that would shatter a pure steel sword, this one bends because of its iron heart. It may dent, but it will not snap. It can be straightened and remains whole." The pastor drew the lesson: "Our faith needs this dual nature: the hard, sharp edge of conviction and truth, wrapped around a core of flexible, humble grace. When life strikes a shattering blow, it is grace at the heart that allows us to bend without breaking."`,
  },
  {
    id: 'story-55',
    title: 'Story 55: The Feast of Leftovers',
    text: `After the grand annual Harvest Feast, the wealthy families would depart. The poor and servants would then gather in the hall for a modest meal of the leftovers. One year, a wealthy merchant's son, curious, stayed behind. He expected a somber affair. Instead, he found joy. People shared stories, broke bread freely, and a spirit of deep contentment filled the room. An old woman said to him, "The first feast is about abundance given. This second feast is about gratitude for what remains. And often, the gratitude is sweeter than the plenty." He realized the first feast celebrated the gift, but the second celebrated the Giver. Our deepest spiritual satisfaction often comes not in the first flush of blessing, but in the quiet, grateful gathering of the fragments afterward.`,
  },
  {
    id: 'story-56',
    title: "Story 56: The Bell-Ringer's Rhythm",
    text: `In a seaside town, the bell-ringer had one task: toll the bell at the exact moment the sun vanished below the horizon. He was precise to the second. But one evening, as he watched, a magnificent schooner was sinking just offshore, its crew fighting for life. The sunset moment arrived. He gripped the rope, torn. He chose not to ring. He ran to the docks to raise the alarm. The crew was saved because of his delay. The next day, the town council rebuked him for neglecting his sacred duty. An old fisherman stood and said, "He was hired to mark time. But last night, he chose to save what time is for. God does not want us slaves to the ritual clock. He wants us alive to the call of love, which is the true rhythm of eternity."`,
  },
  {
    id: 'story-57',
    title: 'Story 57: The Quilt of Scraps',
    text: `In a poor Appalachian community, when someone died, each family would bring a scrap of fabric from the deceased's clothing—a plaid shirt, a faded dress. The church women would sew them into a quilt for the grieving family. No two quilts were alike; they were chaotic, mismatched. Yet, those who received them said they were the heaviest, warmest comfort. A visiting sociologist asked why such haphazard quilts were so cherished. An elderly quilter explained, holding up a block, "This scrap here saw a hard day's work. This one saw a Sunday sermon. This one was patched after a fall. You're not sleeping under a pattern, child. You're sleeping under a life. And the warmth doesn't come from the batting; it comes from all the stories stitched together. That's the church—a quilt of broken lives, pieced together by grace, creating a shelter you can't find anywhere else."`,
  },
  {
    id: 'story-58',
    title: 'Story 58: The Locked Chapel Garden',
    text: `The monastery had a beautiful walled garden, but its gate was always locked. The key was hung on a hook in the abbot's cell. Novices would ask to enter, to pray among the roses. The abbot always refused. "It is not for solitude," he said. Years passed. When the abbot was dying, he gave the key to the newest, most restless novice. "Now, go in." The novice entered, expecting paradise. He found a garden, yes, but overgrown, with a single, gnarled olive tree at its center. The ground was hard. It was not a place of ease, but of stark beauty and struggle. Then he saw, carved into the trunk of the olive tree, centuries of names, dates, and one-word prayers: "Doubt." "Help." "Stay." He understood. This was not a retreat for the devout; it was the battleground for the desperate. The abbot had locked it not to keep people out, but to preserve its holiness as a place where only the truly hungry would seek the key. Some encounters with God require the persistence to ask for the key.`,
  },
  {
    id: 'story-59',
    title: 'Story 59: The Candles That Lit Themselves',
    text: `In a tiny, ancient chapel in the Alps, there was a strange phenomenon. On the coldest, darkest nights of winter, when no one was around, the votive candles before the old wooden icon would sometimes ignite by themselves. Scientists investigated drafts, gases, and rational causes, finding none. A very old nun, the last of her order, simply smiled. "You look for a spark below," she whispered. "But the fire comes from above. On nights when the world is most frozen and the road to this door most treacherous, someone, somewhere, is praying with such fervent heat that it kindles these flames. Prayer is not a whisper lost in air. It is energy. And sometimes, when it is concentrated on the memory of God's presence in a place, even the physical world must acknowledge its warmth." It was a parable of the communion of saints—that the prayers of the faithful can ignite light in places they may never physically go.`,
  },
  {
    id: 'story-60',
    title: 'Story 60: The Scribe Who Erased His Name',
    text: `In a scriptorium, scribes spent decades illuminating holy texts. Each was allowed to inscribe his name in a tiny corner of one masterpiece. Brother Anselm, after fifty years, completed his magnum opus—the entire Book of Psalms. In the lower border, he painstakingly drew a beautiful, intricate vine. Hidden within the leaves, he wove his name. When finished, he stepped back. The sun streamed in, illuminating the page. The gold leaf shone, the colors sang. His name, though clever, now seemed like a discordant note, a whisper of "I did this" in a symphony of divine praise. He took his finest blade, and with heartbreaking precision, scraped away the pigment and gold that formed his name, leaving only the pure, unclaimed vine. The head scribe saw this and asked why. Anselm said, "When the King comes to admire the garden, He should see only the beauty of the vines, not the gardener's signature on the leaves. Let my joy be that I tended the garden, not that I owned it." The greatest story of faith is the one where the believer's own name finally fades, leaving only the evidence of a Master's design and a servant's loving handiwork.`,
  }
  ,
  {
    id: 'story-61',
    title: 'Story 61: The River of Second Chances',
    text: `Every spring, a river flooded the low fields of a small town. The townspeople resented the mud and wreckage. But Mara, a widow, followed the retreating waters each year with a sack of seed. She planted in the wet soil while others complained. When the sun returned, her small plot burst with green while the rest of the valley remained brown. A traveler asked her why she trusted the flood. She replied, "The river takes what I can't keep, but it leaves behind what I can't make—new ground, softer than before." One year, her son failed publicly and wanted to leave the town in shame. Mara took him to the riverbank. "This is the same water that ruined fences," she said, "and it is the same water that feeds this field. Failure feels like a flood, but it can also soften the heart for new roots." He stayed, worked the soil, and years later became the town's most compassionate leader. The river still flooded, but the people learned to read its rhythm. They built smarter homes, dug channels, and planted together. They discovered that what disrupts can also renew. God, Mara said, is not only the God who stops the storm. He is the God who brings life after it.`,
  },
  {
    id: 'story-62',
    title: 'Story 62: The Prayer of the Stubborn Gate',
    text: `A monastery gate was built from iron salvaged after a war. It was heavy and beautiful, but it refused to open fully. The hinges scraped, the lock jammed, and travelers often gave up and turned away. The brothers complained. Brother Niko, the youngest, prayed each morning by the gate, asking God for patience. He brought oil, cloth, and time. Day by day, he cleaned the grit, warmed the metal in the sun, and slowly worked the gate open by inches. Months later, it swung smoothly. When asked why he had not simply replaced it, he said, "This gate remembers the pain of the metal. It doesn’t open because it is afraid. I learned that fear is not fixed by force, but by faithful care." The abbot later used the gate as a lesson for novices: souls that have endured war do not open with one command or sermon. They open to steady care, patient prayer, and repeated kindness. The gate did not change because it was demanded to, but because someone refused to abandon it. In the same way, the Holy Spirit often works not in sudden breakthroughs, but in the daily oiling of grace that restores trust.`,
  },
  {
    id: 'story-63',
    title: 'Story 63: The Lantern at the Fork',
    text: `At the edge of a forest, a forked path confused travelers for generations. The left trail was wide and easy; the right was narrow and steep. A simple lantern hung from an old oak, lit by a hermit who lived nearby. He never forced anyone to choose, only kept the lantern burning. When asked why he did this after so many years, he replied, "Most people don’t need a map; they need a light strong enough to see the next five steps." During a harsh winter, the hermit fell ill and the lantern went dark. Travelers took the wide road, but many were lost because a flood had washed it out. The narrow road, though difficult, remained safe. The townspeople learned that the lantern did not decide their destiny—it simply helped them see. They built a small shelter beside it and took turns tending the flame. The hermit recovered and smiled. "The light was never mine," he said. "It belonged to anyone willing to keep it burning." Faith often works the same way. It may not erase the fork, but it reveals enough of the path to move forward. The call is not to see the whole road, but to carry the flame for the next traveler.`,
  },
  {
    id: 'story-64',
    title: 'Story 64: The Weaver’s Slow Thread',
    text: `A young weaver named Lila was assigned to weave the border of a grand tapestry. The master’s pattern called for a thin, nearly invisible thread that would run the entire edge. Lila protested: "No one will see it. Why not use a bold color that shows my skill?" The master explained, "The border holds the image together. Without it, the picture frays." Lila obeyed reluctantly, day after day, thread by thread. Years later, the tapestry was hung in the cathedral. A storm tore the roof and rain poured in. The bold colors bled and faded, but the image did not unravel. The small border thread held the whole work intact. When visitors asked how the tapestry survived, the master simply nodded at Lila. She learned that faithful, unseen labor often preserves what dazzling talent cannot. In our own lives, the quiet practices—prayer, kindness, integrity—are the threads that keep the picture from unraveling when storms arrive. God sees the border, even when people admire only the center. The strength of the whole story is often found at its edges.`,
  },
  {
    id: 'story-65',
    title: 'Story 65: The Shepherd’s Spare Staff',
    text: `A shepherd named Jonas carved two staffs. One was polished, balanced, and carried daily. The other was rough, carved quickly from a storm-fallen branch, and left by the gate. A wolf attacked during a cold night, splintering Jonas’s polished staff. With no time to carve another, he grabbed the rough spare. To his surprise, it fit his hand even better. It was thicker, heavier, and he could hold it longer without fatigue. He realized the polished staff was beautiful but fragile, while the rough staff was resilient. The next day, he kept the rough one by his side and placed the polished one at the gate. He told his flock, "The staff that looks imperfect may be the one that protects you best." The village pastor later used the staff as a parable: God often prepares hidden tools in ordinary seasons so we are ready in hard ones. The backup we dismiss might be the very thing He intends to use when our refined plans break. Faith is not always a polished instrument; sometimes it is a rugged branch strong enough to endure the night.`,
  },
  {
    id: 'story-66',
    title: 'Story 66: The Apprentice’s Empty Bucket',
    text: `An apprentice mason carried water up a hill each day for a construction crew. His bucket leaked, and by the time he arrived, it was often half-empty. He felt ashamed. One day, the master mason walked the route with him and pointed to the path’s edge. Flowers had bloomed along the trail where the water dripped. "Your bucket isn’t a failure," the master said. "It’s a blessing that waters what we can’t see." The apprentice continued carrying water with new purpose. He later repaired the bucket, but he never fixed it completely. He valued the flowers too much. In the same way, our lives often feel leaky—energy, strength, time. We wish we could be perfect containers. But God can use the very leaks to nourish places we never planned to touch. Our weakness can become a quiet blessing to the margins. The path that feels like waste can become a garden. And the one who carries the bucket discovers that faithful effort, even imperfect, is never truly lost.`,
  },
  {
    id: 'story-67',
    title: 'Story 67: The Bridge Builder’s Prayer',
    text: `A river divided a farming village from its market town. A bridge had been promised for years but never arrived. One man, Eli, began carrying stones to the bank each morning after prayer. At first, the villagers mocked him. "You can’t build a bridge alone." But Eli kept his routine, praying for strength, then placing his stone. One by one, others joined him. They did not agree on everything, but they agreed on the need to cross. Over months, a bridge began to form. It wasn’t built by a grand decree, but by daily acts of obedience. When the bridge finally connected the two shores, the mayor invited Eli to speak. He said only, "I prayed for a bridge, but God answered with a habit." The townspeople understood. Many prayers are answered not by sudden miracles, but by the slow accumulation of faithful steps. Each stone felt small and insignificant, yet together they became a path. God often gives us the grace to do the next right thing, and that grace becomes the bridge we were asking for.`,
  },
  {
    id: 'story-68',
    title: 'Story 68: The Bell and the Storm',
    text: `On a cliffside chapel, a lone bell hung from a wooden frame. It was small, with a thin rope, and had never been considered important. During a violent storm, the chapel’s large bell mechanism jammed, leaving the town without warning. A young girl ran to the cliff and pulled the small bell with all her strength. Its sound was quiet at first, but the wind carried it. The fishermen heard it and rushed to shore. Lives were saved because a bell considered too small rang at the right time. The next week, the town built a shelter around the small bell and trained children to ring it in emergencies. The chapel’s priest preached, "God can use the smallest voice to carry the greatest warning." We often measure our impact by volume and visibility, yet timing and faithfulness are what God honors. A whispered prayer, a gentle word, a simple act—these can echo farther than we imagine when God lifts them into the wind.`,
  },
  {
    id: 'story-69',
    title: 'Story 69: The Baker’s Early Rise',
    text: `Every morning before sunrise, a baker named Ruth rose to knead dough. Her neighbors often wondered why she did it alone, day after day. When asked, she said, "The bread will only rise if I start before anyone sees me." One season, a storm cut off the town’s supply lines. The market shelves emptied. Ruth’s small bakery became the town’s lifeline. She baked through the night, feeding the hungry. When the crisis passed, the mayor praised her work. Ruth replied, "The crisis didn’t make me ready. The hidden mornings did." The lesson was clear: when we choose faithful preparation in quiet seasons, we build capacity for crisis seasons. God often uses the work no one applauds to answer prayers no one could foresee. The dough that rises in silence becomes the bread that sustains a community. So do the habits of prayer, humility, and diligence rise in us long before we notice their worth.`,
  },
  {
    id: 'story-70',
    title: 'Story 70: The Window Cleaner’s View',
    text: `A man named Thomas cleaned the cathedral’s stained-glass windows. His job was hidden and repetitive. One day, a tourist asked him what the windows looked like from the outside. He smiled and said, "Dark. The colors barely show." He then invited her inside. As the sun poured through the glass, the colors burst to life. "It depends where you stand," he said. "From the outside, you see shadows. From the inside, you see the story." Thomas realized his work was not simply cleaning glass but revealing a narrative. In faith, we often judge our lives from the outside—seeing only the darkness, the unfinished, the smudges. But when God’s light shines through, the story becomes visible, and our wounds become part of the beauty. The cleaner’s work is quiet, but it makes the color possible. So do our daily choices of confession, forgiveness, and gratitude. They clear the glass so the light can tell the story.`,
  },
  {
    id: 'story-71',
    title: 'Story 71: The Rope of Trust',
    text: `A mountain rescue team practiced lowering hikers on a rope. One trainee hesitated, gripping the cliff with white knuckles. The leader said, "You don’t trust the rope because you can’t see the end. But the rope is strongest where you can’t see." The trainee closed his eyes, released his grip, and felt the rope hold. Later, the leader explained that the rope was reinforced in its middle, not its ends. Faith often works that way. We feel safest when we can see the end of a season, the finish line, the answer. Yet God’s strength is often most present in the middle—the unseen stretch of uncertainty. Trust isn’t ignoring the cliff; it is leaning into the strength you cannot see. When the rope holds, the trainee learns that surrender is not falling; it is being carried. In our prayers, the middle may feel silent, but it is often where God’s reinforcement is greatest.`,
  },
  {
    id: 'story-72',
    title: 'Story 72: The Candle Maker’s Pause',
    text: `A candle maker prided himself on fast production. He boasted that his wax cooled quickly and his candles burned bright. A mentor visited and asked him to slow down. "Your candles burn fast, then die," she said. "Let them rest." She showed him a process of cooling in stages, allowing the wax to settle. The slower candles burned longer, with steadier light. The maker realized that haste produced brightness but not endurance. In faith, we often measure progress by quick results, but God values steady endurance. The pauses—Sabbath, silence, reflection—are not wasted time. They are the cooling stages that make our light last. Without rest, the flame burns hot and short. With rest, the flame steadies, illuminating the long night. The candle maker’s pause became his discipline, and his candles became gifts of enduring light to those who needed them most.`,
  },
  {
    id: 'story-73',
    title: 'Story 73: The Stone in the Shoe',
    text: `A traveler carried a stone in his shoe for miles, blaming the road for his pain. He complained to other travelers, cursed the rocky path, and nearly quit his journey. At a rest stop, an old woman offered him a bowl of water to wash his feet. As he removed the shoe, he found the stone. He felt foolish and relieved. The road had been rough, but the pain was magnified by what he refused to remove. In our lives, we often misjudge the journey because of small, lodged grievances. The path of faith is never free of rocks, but a hidden stone of resentment or pride can make every step feel unbearable. The old woman told him, "The road will still be long, but at least you won’t limp." The traveler’s pace improved, and his gratitude returned. Sometimes, the greatest relief is not changing the path but removing what we carry within.`,
  },
  {
    id: 'story-74',
    title: 'Story 74: The Orchard’s First Fruit',
    text: `A farmer planted an orchard and waited year after year. The trees grew tall and green, but no fruit came. Neighbors advised him to cut them down. The farmer persisted, pruning, watering, and fertilizing. In the fifth year, a single tree produced one small apple. He held it like a treasure. The next year, the orchard blossomed and produced a harvest. The farmer said, "That first apple was my promise. It told me the trees were alive." In our lives, God often gives a small first fruit—a glimpse of healing, a moment of peace—to assure us that growth is happening even when the harvest is not yet visible. The small sign is not the end; it is the beginning. Faith holds the first fruit and keeps tending the orchard until the season turns.`,
  },
  {
    id: 'story-75',
    title: 'Story 75: The Clock Tower’s Echo',
    text: `A city relied on a tall clock tower to mark time. One day, a crack formed in the tower, and the bell’s sound echoed oddly through the streets. Some said the tower was ruined. An engineer listened to the echo and noticed that it carried farther than before. The crack was reshaping the sound. He reinforced the tower without sealing the crack, and the city’s time was heard in neighborhoods that had never heard it. He said, "The flaw became a channel." We fear cracks in our lives, yet God can use them to carry our message farther. The echo of our struggle can reach those who were once beyond earshot. The tower still stood; it simply sounded different—wider, deeper, more compassionate. The city learned to hear time not just as a schedule but as an invitation to be present. The crack did not destroy the tower. It expanded its voice.`,
  },
  {
    id: 'story-76',
    title: 'Story 76: The Carpenter’s Hidden Beam',
    text: `A carpenter rebuilt a storm-damaged chapel. He used a single beam from an ancient barn, weathered and scarred. The beam looked unfit, so he placed it high in the roof where no one would see it. Years later, a fire swept through the town. The chapel survived because that old beam was denser and less flammable than the new wood. The carpenter explained, "The strongest piece was the one I hid." In God’s economy, the hidden strengths—quiet resilience, patient faith, long-suffering love—often carry the greatest weight. The beams we hide in the roof are not wasted; they are the support for the whole. The chapel stood because of a scarred beam. So do communities stand because of people whose strength is rarely celebrated. Their scars are not a liability; they are the reason the house remains.`,
  },
  {
    id: 'story-77',
    title: 'Story 77: The Lamp That Waited',
    text: `In a remote village, a lamp was kept in a window at the edge of town. For years, no one knew why. An elder said, "It was lit for travelers who never came." One winter, a blizzard stranded a group of pilgrims. They wandered for hours until they saw a faint glow and found shelter. When they entered, the elder simply said, "We kept the lamp ready." The village had maintained the lamp through seasons of no need, for the sake of an unseen future. Faith often looks like readiness in silence. We prepare, pray, and keep watch without immediate reward. When the moment comes, the lamp is already lit. God honors those who keep the light burning for the unknown traveler. The lamp that waited saved lives precisely because it was faithful when it seemed unnecessary.`,
  },
  {
    id: 'story-78',
    title: 'Story 78: The Choir of Whispered Prayers',
    text: `A small church in a noisy city could not afford microphones. Their choir barely carried beyond the first few rows. The pastor asked the congregation to sing louder, but many were shy. One day, an elderly woman suggested they pray together before singing. They did. The next Sunday, their voices were still soft, but their unity was deep. Visitors said the worship felt like a warm blanket rather than a performance. Word spread. People came not for volume but for peace. The church discovered that God does not measure decibels; He measures devotion. The whispered choir became known as a refuge for the weary. In a world that shouts, a soft voice can become a sanctuary. Sometimes the most powerful sound is the one that invites stillness.`,
  },
  {
    id: 'story-79',
    title: 'Story 79: The Farmer’s Fence',
    text: `A farmer fenced his land with sturdy oak posts. A neighbor mocked him, saying the fence was unnecessary because the fields were wide and empty. Years later, a flood came, sweeping debris and animals into the valley. The fence caught the debris, protected the soil, and gave the animals a place to cling. The farmer said, "I built the fence not for when things are calm, but for when they are not." Our spiritual boundaries—disciplines, values, commitments—can seem restrictive in calm seasons. But in the flood, they protect what matters. The fence did not prevent the flood; it prevented the loss. It is not legalism to build a boundary; it is wisdom. The farmer’s fence became a haven because it was built before the storm.`,
  },
  {
    id: 'story-80',
    title: 'Story 80: The Bridge of Lanterns',
    text: `A city built a long wooden bridge across a river. At night, it was dangerous; people fell. A young engineer proposed lanterns along the railing, but the council said it was too expensive. The engineer built one lantern anyway and placed it at the bridge’s center. For weeks, he lit it alone. Slowly, citizens added their own lanterns, one by one, until the bridge was lined with light. The accidents stopped. The engineer said, "We didn’t need one person to fund all the light; we needed one person to start it." The same is true in faith. One act of courage can become a chain of faithfulness. When someone lights a small lantern—an apology, a prayer, a service—others are inspired to light theirs. The bridge becomes safe not by one hero, but by a community of small lights.`,
  },
  {
    id: 'story-81',
    title: 'Story 81: The Sailor’s Compass',
    text: `A sailor crossed a foggy sea with a compass that always pointed north but never promised a smooth route. In the fog, the stars disappeared, and the sea felt endless. He wanted the compass to show the destination. Instead, it offered only a direction. He learned to trust the compass step by step, steering by small corrections rather than large leaps. When he reached land, he realized the compass had never lied; it had simply asked for patience. In faith, God often gives direction rather than detail. We want a map with every landmark, but He gives a compass of truth and presence. The sailor’s steady hand taught him to trust the unseen. The destination became a gift, but the journey became a testimony. Direction, faithfully followed, becomes the map.`,
  },
  {
    id: 'story-82',
    title: 'Story 82: The Potter’s Turn',
    text: `A potter named Nia spun clay on her wheel. Every time she tried to shape a bowl, a wobble in the wheel made the sides uneven. Frustrated, she blamed the clay. An elder potter watched and said, "It’s not the clay. Your wheel is slightly off-center. You must learn to guide it, not fight it." Nia adjusted her hands, letting the wobble become part of the rhythm. The bowls became beautiful in their subtle asymmetry. She learned that the imperfection was not a flaw but a signature. In life, we often fight the small wobble—an ongoing struggle, a persistent weakness. But God can teach us to guide it into shape. We are not clay on a perfect wheel; we are clay in a real world, and grace is the steady hand that turns imperfection into beauty.`,
  },
  {
    id: 'story-83',
    title: 'Story 83: The Village Seed Bank',
    text: `A village kept a seed bank in a small shed, saving the best seeds each harvest. A drought came, and many wanted to eat the seed store. The steward refused, saying, "If we consume the future, we will survive one season and starve the next." The villagers were angry but eventually agreed. The drought passed, and when the rains returned, the seed bank restored the fields. The village survived because someone protected the future when the present felt desperate. Our faith is like a seed bank. In trials, we are tempted to spend all our hope on immediate relief. Yet God calls us to preserve hope for tomorrow. The seed you keep today becomes the harvest you need later. Trusting God means protecting the future, even when the present is hungry.`,
  },
  {
    id: 'story-84',
    title: 'Story 84: The Painter’s Undercoat',
    text: `A muralist began a masterpiece with a plain gray undercoat. Passersby mocked him, saying the wall looked dull. He explained, "The undercoat makes the colors true." Without it, the bright pigments would fade into the wall’s old stains. Months later, when the mural was complete, the colors were vibrant and lasting. The artist said, "The part you could not see determined the part you would love." In our spiritual lives, the unseen undercoats—private prayer, confession, humility—prepare the surface for the visible work. Without them, our public colors fade. God is not in a hurry to paint over what is unprepared; He cares about the foundation that makes beauty durable. The undercoat seems slow, but it is the secret of lasting color.`,
  },
  {
    id: 'story-85',
    title: 'Story 85: The Orchard Keeper’s Song',
    text: `A keeper sang to his orchard each morning. Travelers laughed at him, but his trees produced fruit with remarkable sweetness. A botanist studied the soil and found nothing unusual. The keeper said, "I sing because the work is long and the trees respond to attention. The song keeps my heart steady." The botanist concluded that the song did not change the trees; it changed the keeper. He watered more consistently, pruned more carefully, and noticed problems early. The fruit was sweeter because the keeper was more faithful. Sometimes worship is not about changing God’s mind; it is about changing ours. The song shapes the singer, and the singer shapes the work. Our praise becomes the discipline that makes our labor fruitful.`,
  },
  {
    id: 'story-86',
    title: 'Story 86: The Road Marker',
    text: `On a mountain road, a simple stone marked a dangerous turn. A driver complained that the marker was ugly and wanted it removed. The village refused. That night, a storm erased the road’s edge. Only the marker prevented drivers from falling. In gratitude, the driver helped repaint it. In faith, the marker is often the uncomfortable truth—the warning we don’t want to see. It may not be beautiful, but it is merciful. God’s boundaries are not to restrict joy but to keep us from cliffs we cannot see in the storm. The road marker’s value is revealed when visibility is low. The same is true of Scripture and wisdom. They are most precious not in sunshine, but in the fog.`,
  },
  {
    id: 'story-87',
    title: 'Story 87: The Vessel of Quiet',
    text: `A craftsman built two water jars. One was ornate and glazed, the other plain and unadorned. The ornate jar was displayed in a market and praised. The plain jar was used daily by a woman drawing water for her family. Over time, the ornate jar cracked and was discarded. The plain jar, though chipped, endured. It absorbed the rhythm of daily use and never failed. The woman said, "Beauty is good, but purpose is better." In spiritual life, we can pursue polish—impressive words, public accolades—while neglecting quiet usefulness. God treasures the vessel that serves faithfully day after day, even if it is chipped. The ordinary rhythms of kindness, patience, and perseverance are often the strongest vessels of grace.`,
  },
  {
    id: 'story-88',
    title: 'Story 88: The Teacher’s Chalk',
    text: `A teacher in a rural village had only a few pieces of chalk. She broke them in half and gave one to a student each day. "Write what you know," she said. "Teach someone else." The chalk wore down quickly, but the students began to teach one another. A year later, the village literacy rate had doubled. The chalk was gone, but knowledge remained. The teacher said, "A resource shrinks when it is kept. It grows when it is shared." God’s wisdom works the same way. When we hoard what we’ve learned, it withers. When we share it, it multiplies. The chalk is not the treasure; the understanding it spreads is.`,
  },
  {
    id: 'story-89',
    title: 'Story 89: The Gate of Rest',
    text: `A small town built a gate at the edge of its market to close for one day each week. Merchants protested, fearing they would lose profit. But the mayor insisted on the gate. Over time, families gathered, friendships deepened, and the town’s health improved. The merchants found that a day of rest did not shrink their prosperity; it increased their joy. The gate did not limit the town; it protected it. In our lives, Sabbath boundaries are gates of mercy. They remind us we are not machines. God’s invitation to rest is not a loss of productivity but a gain of presence. The gate of rest keeps the soul from running out.`,
  },
  {
    id: 'story-90',
    title: 'Story 90: The Repaired Violin',
    text: `A violinist dropped his instrument during a hurried performance. A crack ran along the body. He was devastated and planned to replace it. An old luthier offered to repair it. He opened the violin and placed a small, thin brace inside the crack, then sealed it. When the violin was played again, its sound was deeper, warmer, and more resonant. The luthier said, "The crack gave the sound somewhere to breathe." In our lives, pain can become the place where God’s grace resonates. We fear the break, but God can brace it from within. The repair is not just a fix; it becomes a new source of tone. The violin’s song changed, and so did the musician’s heart. He played with more humility, more compassion, and more beauty than before.`,
  },
  {
    id: 'story-91',
    title: 'Story 91: The Lantern Maker’s Test',
    text: `A lantern maker tested every lamp by placing it in a dark room for a full night. Some lamps flickered and died; others burned steadily. Customers complained about delays. The maker replied, "I don’t want to sell you a lantern that only shines in daylight." The test ensured that the lanterns would last in real darkness. God’s training often feels like a dark room—quiet, slow, and hidden. But it is in those places that the flame is tested. Faith proven in the dark is the faith that carries us when the sun sets. The lantern maker knew that light without endurance is a decoration, not a guide. So does God.`,
  },
  {
    id: 'story-92',
    title: 'Story 92: The Gardener’s Compost',
    text: `A gardener kept a compost pile behind her shed. Neighbors complained about the smell and mess. She replied, "This is where dead things become life." She mixed old leaves, scraps, and weeds, turning them patiently. Months later, her garden bloomed with remarkable vigor. She explained that the compost did not deny decay; it transformed it. In our lives, the compost is our past—mistakes, griefs, losses. We can hide it or we can bring it to God, who turns it into soil. Healing often comes not from pretending the pain never happened, but from letting God transform it into nourishment. The compost pile may smell for a season, but it becomes the richest ground.`,
  },
  {
    id: 'story-93',
    title: 'Story 93: The Carpenter’s Bench',
    text: `A carpenter built a bench for a widow who could no longer stand long enough to cook. He measured carefully and made the seat lower than usual. When the widow sat, she wept. The bench was not beautiful, but it was perfect for her. The carpenter said, "A bench is only as good as the one it serves." In faith, our gifts are not about impressing others but about serving real needs. God measures usefulness by compassion, not by applause. The bench in the widow’s kitchen became an altar of love. It was built to hold her, and in holding her, it honored God.`,
  },
  {
    id: 'story-94',
    title: 'Story 94: The Sailor’s Knot',
    text: `A sailor taught his daughter a knot that could be tied in the dark. He said, "The storm won’t give you time to see. Your hands must remember what your eyes cannot." She practiced until the knot was second nature. Years later, caught in a storm, she tied it by feel and saved her crew. Spiritual habits work the same way. In calm days, we practice prayer, gratitude, and Scripture so that in storms our hands already know the way. Faith is not just knowledge; it is muscle memory for the soul. The knot that is practiced in peace becomes the anchor in chaos.`,
  },
  {
    id: 'story-95',
    title: 'Story 95: The Empty Page',
    text: `A writer sat before a blank page and prayed, "God, give me words." Hours passed in silence. Frustrated, she wrote the only thing she could: "I am empty." She expected nothing. But that sentence became the beginning of a poem that touched thousands. She realized the blank page was not rejection; it was invitation. God sometimes meets us in our honest emptiness rather than in our cleverness. The truth of our need can be more powerful than the polish of our talent. The empty page became a testimony: when we bring God our emptiness, He fills it in His own time.`,
  },
  {
    id: 'story-96',
    title: 'Story 96: The Mountain Spring',
    text: `A village built pipes to draw water from a mountain spring. The pipes worked well for years, but a landslide buried part of the line. The villagers argued about who was to blame. An old shepherd walked up the mountain and simply cleared the spring’s source. The water flowed again. He said, "Repairing the pipes matters, but if the source is blocked, nothing downstream will be clean." In faith, we can focus on fixing symptoms—behavior, schedules, performance—while neglecting the source: our communion with God. Clearing the source often restores the whole system. The shepherd’s simple act reminded them that purity begins upstream.`,
  },
  {
    id: 'story-97',
    title: 'Story 97: The Traveler’s Map',
    text: `A traveler carried a detailed map through a valley. He knew every hill and turn. Then a landslide reshaped the landscape, and his map no longer matched the ground. He panicked until an old guide took his hand. "The map has changed," the guide said, "but I have not." The traveler learned to walk by trust rather than by paper. In life, our plans can be upended, and our familiar routes can vanish. God does not always restore the old map. He offers Himself as the guide through a new terrain. Trusting Him is not the absence of preparation; it is the willingness to be led when preparation fails. The traveler still kept his map, but he stopped worshiping it.`,
  },
  {
    id: 'story-98',
    title: 'Story 98: The Hidden Choir',
    text: `In a great cathedral, a small choir sang in a loft hidden behind a screen. The congregation never saw them, only heard their voices. One Sunday, the choir leader asked if they wished to move to the front for recognition. They declined. "If they see us," one singer said, "they will listen to our faces, not our voices." The choir understood that visibility can distort worship. Their hiddenness protected the purity of their offering. In our lives, God sometimes calls us to serve unseen so that the focus remains on Him. Hidden service is not lesser service; it is often purer. The hidden choir reminded the cathedral that God hears even the songs no one else sees.`,
  },
  {
    id: 'story-99',
    title: 'Story 99: The Bread of Tomorrow',
    text: `A family in a besieged city found a small bag of flour. The mother baked bread each day, using only enough for one loaf. Her children begged her to make more and store it. She refused. "If we eat tomorrow’s bread today, we will have none tomorrow," she said. Each day, she prayed and baked a fresh loaf. The bag lasted far longer than expected. Years later, her children remembered that lesson: God gives daily bread, not to keep us anxious, but to teach us dependence. The mother’s wisdom was not hoarding; it was trust. The bread of tomorrow comes when tomorrow arrives.`,
  },
  {
    id: 'story-100',
    title: 'Story 100: The Final Candle',
    text: `A village kept a ceremonial candle in its chapel. It was only lit for the most dire crises. One winter, famine and illness swept the valley. The elders argued whether to light the candle. "If we light it now, what will we do later?" one asked. An old woman stood and lit it without permission. "There is no later if we do not light it now," she said. The candle burned through the night. Villagers gathered, prayed, and organized aid. The crisis did not vanish, but hope returned. The candle’s flame was not magic; it was a signal of courage. Sometimes the greatest act of faith is to light the candle while darkness still surrounds us. It declares, to ourselves and to the world, that hope is not postponed. It is lit now.`,
  }
];

export const SHORTCUTS = {
  PRIMARY: 'mod+enter',
  COPY: 'mod+shift+c',
  BACK: 'escape',
  START_OVER: 'mod+shift+r'
};
