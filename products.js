/* Harvest & Field — product catalog data
   Edit this file to add, remove, or change products.
   Each product's `image` must match a file in /images.
   `price` is a display string — set to "Call for pricing" if you don't want to publish a number.
   `status` should be one of: "In stock", "Low stock", "Out of stock", "Special order".
*/
const PRODUCTS = [
  // ---------- SEEDS ----------
  {
    id: "seed-cereal-mix",
    category: "seeds",
    name: "Cereal & Field Crop Seed",
    image: "img33.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Reliable cereal and field-crop seed selected for strong, even starts.",
    description: "Our cereal and field-crop seed lines are selected for germination rate, vigour, and consistency across seasons. Suited to a range of soils and rotations. Talk to us about the variety that fits your crop plan, field history, and target yield."
  },

  // ---------- FERTILIZERS ----------
  {
    id: "plf-maxxx",
    category: "fertilizers",
    name: "Best PLF MAXXX 4-13-4",
    image: "img21.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Foliar liquid fertilizer formulated for peas, lentils & faba beans.",
    description: "PLF MAXXX is a foliar liquid fertilizer (4-13-4) derived from blended granular fertilizer, specifically formulated for peas, lentils, and faba beans. Contains iron, boron, zinc, molybdenum, manganese, copper, and fulvic acid. Apply 1.5 L per 0.4 ha, 2–3 times during the growing season. Do not freeze. Available in 500 L totes."
  },
  {
    id: "omex-tote",
    category: "fertilizers",
    name: "OMEX Liquid Fertilizer Tote",
    image: "img11.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Bulk liquid fertilizer in a 6-12-6 formulation, tote packaging.",
    description: "OMEX bulk liquid fertilizer supplied in a refillable tote (approx. 6-12-6 analysis). Always agitate before use. Ask us about tote deposits, refill pricing, and delivery for larger farm operations."
  },
  {
    id: "amp-boron-bag",
    category: "fertilizers",
    name: "AMP Boron (Bagged)",
    image: "img12.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Granular boron micronutrient from Advanced Micronutrient Products.",
    description: "AMP Boron is a granular boron micronutrient fertilizer, useful for correcting boron deficiency in sensitive crops such as canola, alfalfa, and vegetables. Sold by the bag — ask about bulk pricing for larger acreages."
  },
  {
    id: "amp-nubor-10",
    category: "fertilizers",
    name: "AMP NuBOR 10 Granular",
    image: "img13.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Concentrated granular micronutrient blend — 10% B, 10% Ca, 5% Mg.",
    description: "NuBOR 10 is a granular micronutrient blend containing 10% boron, 10% calcium, and 5% magnesium, designed for blending into broadcast fertilizer programs. Ideal for growers needing a targeted boron/calcium correction alongside their main nutrient program."
  },
  {
    id: "kinetic-copper",
    category: "fertilizers",
    name: "Kinetic Copper",
    image: "img15.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Copper micronutrient product for correcting Cu deficiency.",
    description: "Kinetic Copper is a micronutrient product supplying plant-available copper, useful on copper-deficient soils common in cereal and forage production. Ask us about tank-mix compatibility with your planned herbicide or fungicide pass."
  },
  {
    id: "primer-mn",
    category: "fertilizers",
    name: "Mn Primer",
    image: "img17.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Manganese micronutrient primer for seed or foliar application.",
    description: "Mn Primer supplies manganese to correct deficiencies that limit early crop vigour, especially on high-pH or sandy soils. Compatible with a range of seed treatment and foliar programs — ask us for the recommended rate for your crop."
  },
  {
    id: "c3-stress-reliever",
    category: "fertilizers",
    name: "C3 Stress Reliever",
    image: "img18.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Root-and-shoot biostimulant to help crops handle environmental stress.",
    description: "C3 is a biostimulant/stress-reliever product designed to support crops through periods of heat, drought, or other environmental stress, supporting root development and overall plant resilience. Ask about the right timing for your crop's growth stage."
  },

  // ---------- PESTICIDES & INSECTICIDES ----------
  {
    id: "sevin-flo",
    category: "protection",
    name: "Sevin Flo Insecticide",
    image: "img4.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Broad-spectrum insecticide for chewing and sucking pests.",
    description: "Sevin Flo is a broad-spectrum Group 1 insecticide for the control of certain chewing and sucking pests, and for the chemical thinning of apples. Supplied in 10 L containers. Always read and follow the label before use — ask us for the current label and rate for your crop and target pest."
  },
  {
    id: "coragen",
    category: "protection",
    name: "Coragen Insecticide",
    image: "img22.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Group 28 insecticide for root/tuber, fruiting, and brassica vegetables, canola, corn, oilseeds & cereals.",
    description: "Coragen is a Group 28 suspension insecticide (active ingredient: Chlorantraniliprole 200 g/L) registered for use on root and tuber vegetables, fruiting vegetables, brassica vegetables, legume vegetables, canola, corn, oilseeds, and cereals. Supplied 2 x 6 L per case. Contains allergens (sulfites and milk) — read the full label before use."
  },
  {
    id: "pounce-38",
    category: "protection",
    name: "Pounce 38 Insecticide",
    image: "img23.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "FMC insecticide for broad pest control programs.",
    description: "Pounce 38 is an FMC insecticide used across a range of field and horticultural crops for control of listed pests. Ask us for the current label and recommended rate for your specific crop and pest pressure."
  },
  {
    id: "malathion-85",
    category: "protection",
    name: "Malathion 85 EC",
    image: "img24.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "General-purpose emulsifiable concentrate insecticide.",
    description: "Malathion 85 EC is a general-purpose emulsifiable concentrate insecticide used for control of a broad range of insect pests. Read and follow the label directions for your crop, target pest, and pre-harvest interval."
  },
  {
    id: "par-iii",
    category: "protection",
    name: "PAR III Turf Herbicide",
    image: "img35.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Commercial-solution turf herbicide, Group 4.",
    description: "PAR III is a Group 4 commercial-solution turf herbicide containing Mecoprop-P, 2,4-D, and Dicamba (as dimethylamine salts). Supplied in 10 L containers. For turf use only — read the attached booklet and label before use."
  },
  {
    id: "elatus",
    category: "protection",
    name: "Elatus Fungicide",
    image: "img42.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Broad-spectrum fungicide for field and horticultural crops.",
    description: "Elatus is a fungicide used for disease control across a range of field and horticultural crops. Ask us for the current label and the recommended program for the disease you're managing."
  },
  {
    id: "prosaro-xtr",
    category: "protection",
    name: "Prosaro XTR Fungicide",
    image: "img34.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Dual-active fungicide for cereals and other field crops.",
    description: "Prosaro XTR is a fungicide used in cereal disease-control programs, including for fusarium head blight suppression where labelled. Ask us about tank-mix options and the right timing for your crop stage."
  },
  {
    id: "miravis-neo",
    category: "protection",
    name: "Miravis Neo Fungicide",
    image: "img39.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Triple-active fungicide for broad disease control.",
    description: "Miravis Neo is a fungicide offering broad-spectrum disease control for field crops. Ask us for the current label rate and application timing for your crop and target disease."
  },
  {
    id: "agral-90",
    category: "protection",
    name: "Agral 90 Surfactant",
    image: "img40.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Non-ionic spray surfactant / wetting agent.",
    description: "Agral 90 is a non-ionic surfactant used as a spray adjuvant to improve the coverage and performance of compatible crop-protection products. Always check tank-mix compatibility before use."
  },
  {
    id: "magnify",
    category: "protection",
    name: "Magnify",
    image: "img41.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Crop-protection product — ask us about the current label.",
    description: "Magnify is part of our crop-protection range. Contact us for the current label, registered crops, and recommended application rate."
  },
  {
    id: "magnify-spectrum",
    category: "protection",
    name: "Magnify Spectrum",
    image: "img45.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Crop-protection product distributed exclusively by UFA.",
    description: "Magnify Spectrum is a crop-protection product distributed exclusively by UFA. Keep out of reach of children; shake well before use and read the entire label before using. Contact us for current registered uses and rates."
  },

  // ---------- BIRD & PEST DETERRENTS ----------
  {
    id: "bird-xpeller-pro",
    category: "tools",
    name: "Bird-X Super BirdXPeller PRO",
    image: "img4.jpg",
    price: "Call for pricing",
    status: "In stock",
    short: "4-speaker ultrasonic + sonic bird repeller system for large areas.",
    description: "The Super BirdXPeller PRO combines ultrasonic and sonic bird-distress calls across 4 weatherproof speakers to protect larger areas such as barns, storage yards, or open fields from nuisance birds. Weatherproof housing, adjustable volume and frequency controls."
  },
  {
    id: "bird-xpeller-single",
    category: "tools",
    name: "Bird-X BirdXPeller PRO (Single Speaker)",
    image: "img5.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Compact single-speaker sonic/ultrasonic bird repeller.",
    description: "A compact single-speaker version of the BirdXPeller PRO, suitable for smaller structures, sheds, or outbuildings where nuisance birds need to be deterred."
  },
  {
    id: "transonic-pro",
    category: "tools",
    name: "Bird-X Transonic PRO",
    image: "img9.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Dual-speaker ultrasonic pest repeller for indoor/enclosed spaces.",
    description: "The Transonic PRO uses ultrasonic sound to repel rodents and other pests from enclosed spaces such as storage rooms, barns, and equipment sheds. Not effective for outdoor open-air use — pairs well with the BirdXPeller PRO for outdoor coverage."
  },
  {
    id: "qb-4-repeller",
    category: "tools",
    name: "Bird-X QB-4 Ultrasonic Bird Repeller",
    image: "img43.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Quad-speaker ultrasonic bird repeller with adjustable settings.",
    description: "The QB-4 delivers ultrasonic bird deterrence through four speaker outputs with adjustable volume, frequency, and mode controls, suited to warehouses, barns, and covered storage areas."
  },

  // ---------- TOOLS & EQUIPMENT ----------
  {
    id: "grain-auger",
    category: "tools",
    name: "Swing-Away Grain Auger",
    image: "img1.jpg",
    price: "Call for pricing",
    status: "Special order",
    short: "Towable swing-away grain auger for bin filling and transfer.",
    description: "A towable swing-away grain auger for loading and transferring grain to storage bins. Condition and specifications vary by unit in stock — contact us for current availability, length, and pricing."
  },
  {
    id: "aeration-fan",
    category: "tools",
    name: "AGI Aeration Fan",
    image: "img7.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Axial aeration fan for grain bin cooling and drying.",
    description: "An AGI axial aeration fan for grain bin cooling and moisture management. Helps maintain grain quality in storage. Contact us for the horsepower and airflow rating in stock."
  },
  {
    id: "grain-guard-heater",
    category: "tools",
    name: "AGI GrainGuard Heater Unit",
    image: "img6.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Propane/natural gas supplemental heater for grain aeration systems.",
    description: "An AGI GrainGuard heater unit, used to supplement aeration systems for grain drying with propane or natural gas. Includes safety shut-off and pressure regulation. Ask us about compatible fan pairings."
  },
  {
    id: "electric-motor",
    category: "tools",
    name: "Farm Duty Electric Motor",
    image: "im2.jpg",
    price: "Call for pricing",
    status: "In stock",
    short: "General-purpose single-phase electric motor for farm equipment.",
    description: "A general-purpose farm-duty electric motor suited to fans, augers, and other powered equipment. Contact us for the horsepower, voltage, and mounting configuration currently in stock."
  },
  {
    id: "shade-privacy-net",
    category: "tools",
    name: "Shade / Privacy Netting",
    image: "img8.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Woven mesh netting for shade, windbreak, or privacy screening.",
    description: "Durable woven mesh netting suited for shade cloth, windbreaks, or livestock enclosure screening. Sold by the roll — ask us about available sizes and shade percentages."
  },

  // ---------- LIVESTOCK HANDLING, PUMPS & MOTORS ----------
  {
    id: "cattle-squeeze-chute",
    category: "tools",
    name: "Cattle Squeeze Chute (Performer Series)",
    image: "img73.webp",
    price: "Call for pricing",
    status: "Special order",
    short: "Hydraulic squeeze chute for safe, efficient cattle handling.",
    description: "A hydraulic cattle squeeze chute built for safe, controlled handling during vaccinations, tagging, or veterinary work. Features hydraulic head restraint, side-access panels, and a self-catching headgate. Contact us for current lead time and configuration options."
  },
  {
    id: "solar-water-pump-system",
    category: "tools",
    name: "Solar-Powered Water Pump System",
    image: "img74.webp",
    price: "Call for pricing",
    status: "Special order",
    short: "Off-grid solar pump kit with submersible pump and controller — ideal for remote water troughs or dugouts.",
    description: "A complete off-grid solar water pumping kit, including solar panels, a submersible pump, wiring, and a control box housed in a weatherproof case. Well suited to remote pastures, dugouts, or livestock watering points without grid power. Ask us about panel wattage and pump flow rate options."
  },
  {
    id: "belt-driven-transfer-pump",
    category: "tools",
    name: "Belt-Driven Transfer Pump",
    image: "img75.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Motor-driven self-priming transfer pump on a mounting plate.",
    description: "A belt-driven, self-priming transfer pump suited to moving water or light liquids around the farm. Mounted on a steel base plate with pulley and belt guard. Contact us for the flow rate and inlet/outlet size in stock."
  },
  {
    id: "centrifugal-sprayer-pump",
    category: "tools",
    name: "Centrifugal Sprayer Pump",
    image: "img68.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Gear/PTO-driven centrifugal pump for sprayer and transfer applications.",
    description: "A cast-iron centrifugal pump suited to field sprayer setups and general liquid transfer. Contact us for the drive type (gear, PTO, or electric), port size, and flow rate currently in stock."
  },
  {
    id: "farm-motor-marathon",
    category: "tools",
    name: "Marathon Farm-Duty Electric Motor",
    image: "img61.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Single-phase farm-duty motor with built-in overload protection.",
    description: "A Marathon farm-duty electric motor with a totally-enclosed housing and built-in overload protection, suited to fans, augers, and other farm equipment. Ask us for the horsepower and RPM currently in stock."
  },
  {
    id: "farm-motor-leeson",
    category: "tools",
    name: "Leeson Electric Motor",
    image: "img62.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "General-purpose single-phase electric motor.",
    description: "A Leeson single-phase electric motor suited to general farm and shop equipment. Contact us for the horsepower, frame size, and mounting configuration in stock."
  },
  {
    id: "farm-motor-compact",
    category: "tools",
    name: "Compact Single-Phase Motor",
    image: "img63.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Compact single-phase motor for fans and light equipment.",
    description: "A compact single-phase electric motor suited to smaller fans and light-duty farm equipment. Ask us for the horsepower and shaft size currently in stock."
  },
  {
    id: "auger-flighting",
    category: "tools",
    name: "Grain Auger Flighting Section",
    image: "img64.webp",
    price: "Call for pricing",
    status: "Special order",
    short: "Replacement auger flighting section for grain handling equipment.",
    description: "A replacement flighting (screw) section for grain augers, used to repair or rebuild worn auger tubes. Contact us for the diameter and length that matches your auger."
  },
  {
    id: "poly-sprayer-tank",
    category: "tools",
    name: "Buffer Valley Poly Sprayer Tank",
    image: "img65.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Skid-mounted poly tank for spray mixes or bulk liquid storage.",
    description: "A Buffer Valley Industries poly tank suited to spray mixes, water, or other liquid storage on a skid base. Ask us about available capacities and fitting configurations."
  },
  {
    id: "bin-hopper-cone-panels",
    category: "tools",
    name: "Bin Hopper Cone Panels",
    image: "img66.webp",
    price: "Call for pricing",
    status: "Special order",
    short: "Galvanized hopper cone panels for grain bin flow control.",
    description: "Galvanized hopper cone panels used to line or repair the discharge cone of a grain storage bin, helping grain flow evenly to the outlet. Contact us for the bin diameter and panel configuration you need."
  },
  {
    id: "three-point-box-blade",
    category: "tools",
    name: "3-Point Box Blade / Cultivator",
    image: "img67.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Tractor-mounted box blade with scarifier shanks for grading and light tillage.",
    description: "A 3-point mounted box blade fitted with removable scarifier shanks, useful for grading driveways, laneways, and light tillage work. Contact us for the working width in stock."
  },

  // ---------- ANIMAL HOUSING & ENCLOSURES ----------
  {
    id: "poultry-run-canopy",
    category: "tools",
    name: "Poultry Run with Canopy",
    image: "img69.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Hexagonal wire poultry run with a weatherproof canopy top.",
    description: "A hexagonal chicken-wire poultry run with a weatherproof canopy roof and lockable gate, giving birds a secure outdoor space protected from overhead predators and weather. Easy to assemble and move between areas of the yard."
  },
  {
    id: "small-animal-cage",
    category: "tools",
    name: "Multi-Level Small Animal Cage",
    image: "img70.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Rolling multi-level cage for guinea pigs, rabbits, and other small animals.",
    description: "A multi-level wire cage with ramps and a slide-out base tray, mounted on locking casters for easy cleaning and repositioning. Suited to guinea pigs, rabbits, and similar small animals."
  },
  {
    id: "dog-kennel-canopy",
    category: "tools",
    name: "Chain-Link Dog Kennel with Canopy",
    image: "img71.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Large outdoor chain-link dog run with a sun/rain canopy.",
    description: "A galvanized chain-link dog kennel with a lockable gate and an angled canopy roof for sun and rain protection. Suited to farmyard dogs needing a secure outdoor run."
  },
  {
    id: "wooden-chicken-coop",
    category: "tools",
    name: "Wooden Chicken Coop with Run",
    image: "img72.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Two-tier wooden coop with nesting box, ramp, and enclosed run.",
    description: "A two-tier wooden chicken coop with a covered nesting area, access ramp, and an attached wire run for daytime roaming. Weatherproof roofing and a pull-out base for easy cleaning."
  },
  {
    id: "wire-pet-playpen",
    category: "tools",
    name: "Wire Pet Playpen",
    image: "img78.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Foldable hexagonal wire playpen for small pets and poultry chicks.",
    description: "A foldable hexagonal wire playpen suited to small pets, rabbits, or poultry chicks needing a temporary, secure enclosure indoors or outdoors."
  },

  // ---------- FEEDERS ----------
  {
    id: "round-bale-feeder-steel",
    category: "tools",
    name: "Round Bale Feeder (Steel)",
    image: "img76.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Heavy steel ring feeder for round bales, reduces hay waste.",
    description: "A heavy-duty steel ring feeder for round bales, designed to reduce trampling and waste while cattle or horses feed. Suited to barn or paddock use."
  },
  {
    id: "hex-hay-feeder-prairie",
    category: "tools",
    name: "Prairie Hexagonal Hay Feeder",
    image: "img77.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Hexagonal panel hay feeder with curved feeding bars.",
    description: "A hexagonal panel hay feeder with curved feeding bars around the perimeter, sized for a round bale. Panelled sides help contain loose hay and reduce waste."
  },

  // ---------- MORE SEEDS ----------
  {
    id: "dlf-forage-seed",
    category: "seeds",
    name: "DLF Forage Seed",
    image: "img79.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Forage seed blend for pasture and hay ground.",
    description: "DLF Forage Seed is bred for pasture and hay production, selected for stand persistence and forage quality. Ask us about the blend suited to your soil type, grazing plan, or hay program."
  },
  {
    id: "dlf-pickseed-corn",
    category: "seeds",
    name: "DLF Pickseed Seed Corn",
    image: "img80.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Seed corn from DLF Pickseed for grain or silage production.",
    description: "DLF Pickseed seed corn selected for strong emergence and yield potential. Contact us for the hybrid maturity and population best suited to your field and end use (grain or silage)."
  },
  {
    id: "dlf-seed-corn",
    category: "seeds",
    name: "DLF Seed Corn",
    image: "img81.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "DLF seed corn, bilingual packaging, for grain or silage production.",
    description: "DLF seed corn bred for consistent emergence and standability. Ask us about the hybrid and maturity rating available for your growing zone."
  },

  // ---------- MORE POWER TOOLS & CARTS (tools & equipment) ----------
  {
    id: "dewalt-hedge-trimmer",
    category: "tools",
    name: "DeWalt Cordless Hedge Trimmer",
    image: "img84.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "20V cordless hedge trimmer for yard and hedgerow maintenance.",
    description: "A DeWalt 20V cordless hedge trimmer suited to shaping hedges and trimming yard growth around farm buildings and driveways. Battery and charger sold separately unless noted — ask us about kit options."
  },
  {
    id: "dewalt-pole-saw",
    category: "tools",
    name: "DeWalt Cordless Pole Saw",
    image: "img85.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "20V brushless telescoping pole saw for pruning and limbing.",
    description: "A DeWalt 20V brushless pole saw with an extendable shaft, useful for pruning branches and clearing overhead growth without a ladder. Ask us about bar length and battery options."
  },
  {
    id: "tow-behind-lawn-sweeper",
    category: "tools",
    name: "Tow-Behind Lawn Sweeper",
    image: "img86.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Tow-behind brush sweeper for clearing leaves and debris from large areas.",
    description: "A tow-behind lawn sweeper with a brush roller and collection hopper, useful for clearing leaves, grass clippings, and light debris from yards, laneways, and paddocks. Hitches behind a lawn tractor or ATV."
  },
  {
    id: "garden-utility-cart-gray",
    category: "tools",
    name: "Garden Utility Cart (4-Wheel)",
    image: "img87.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "4-wheel poly utility cart for hauling tools, feed, or garden supplies.",
    description: "A 4-wheel poly-bed utility cart with pneumatic tires and a pull handle, useful for hauling tools, feed bags, or garden supplies around the yard or barn."
  },
  {
    id: "dewalt-leaf-blower",
    category: "tools",
    name: "DeWalt Cordless Leaf Blower",
    image: "img88.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "20V brushless cordless blower for clearing leaves and debris.",
    description: "A DeWalt 20V brushless cordless blower for clearing leaves, grass clippings, and light debris from yards, driveways, and shop floors. Ask us about battery and charger kit options."
  },
  {
    id: "garden-utility-cart-green",
    category: "tools",
    name: "Heavy-Duty Garden Cart (Mesh-Side)",
    image: "img89.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Mesh-sided folding utility cart with large pneumatic tires.",
    description: "A heavy-duty folding utility cart with mesh sides and large pneumatic tires, suited to hauling firewood, garden produce, feed, or general yard hauling. Folds flat for storage."
  },

  // ---------- SPRAYERS & APPLICATION EQUIPMENT ----------
  {
    id: "dewalt-backpack-sprayer",
    category: "sprayers",
    name: "DeWalt Backpack Sprayer",
    image: "img91.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Backpack sprayer for herbicide, pesticide, or fertilizer application.",
    description: "A DeWalt backpack sprayer with padded straps and an adjustable wand, suited to applying herbicides, pesticides, or liquid fertilizer over larger areas than a handheld sprayer allows. Ask us about tank capacity and pressure rating."
  },
  {
    id: "chapin-backpack-sprayer",
    category: "sprayers",
    name: "Chapin Backpack Sprayer",
    image: "img92.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Manual pump backpack sprayer with adjustable pressure control.",
    description: "A Chapin manual pump backpack sprayer with an adjustable pressure regulator, suited to spot spraying herbicides, pesticides, or foliar fertilizers. No battery or fuel required."
  },
  {
    id: "roundup-pump-sprayer",
    category: "sprayers",
    name: "Roundup Pump Sprayer",
    image: "img93.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Handheld/wearable pump sprayer for spot treatment.",
    description: "A Roundup-branded pump pressure sprayer suited to spot-treating weeds around yards, fence lines, and small areas. Simple pump-and-spray operation with an adjustable nozzle."
  },
  {
    id: "roundup-pro-backpack-sprayer",
    category: "sprayers",
    name: "Roundup PRO Backpack Sprayer",
    image: "img94.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Backpack sprayer with PumpZero technology for consistent output.",
    description: "A Roundup PRO backpack sprayer featuring PumpZero technology for reduced pumping effort and consistent spray output, suited to larger spraying jobs around the farm."
  },

  // ---------- LIVESTOCK & EQUINE CARE ----------
  {
    id: "horse-fly-mask",
    category: "livestock-care",
    name: "Horse Fly Mask",
    image: "img95.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Protective fly mask with ear covers for horses.",
    description: "A fly mask with ear covers that shields a horse's eyes and ears from flies and irritation while still allowing full visibility. Adjustable straps for a secure, comfortable fit."
  },
  {
    id: "hoof-nippers",
    category: "livestock-care",
    name: "Farrier's Hoof Nippers",
    image: "img97.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Precision hoof nippers for trimming horse hooves.",
    description: "Precision-forged hoof nippers used by farriers and horse owners for trimming excess hoof wall before shoeing or routine hoof maintenance."
  },
  {
    id: "farrier-clinching-tool",
    category: "livestock-care",
    name: "Farrier's Clinching Tool",
    image: "img98.webp",
    price: "Call for pricing",
    status: "In stock",
    short: "Long-handled clinching tool for setting horseshoe nails.",
    description: "A long-handled farrier's clinching tool used to bend over and set horseshoe nail ends securely against the hoof wall during shoeing."
  },
];
