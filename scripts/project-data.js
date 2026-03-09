const PROJECTS = {
	// Characters
	chris: {
		title: "Chris",
		date: "January 2023",

		images: {
			base: "assets/images/renders/characters/chris/chris",
			total: 5
		},

		description: `
			Over the Christmas break, without various school assignments taking up my time, I put more effort into character modelling. I tried to maintain a more consistent level of detail across facial features this time around. The model went through a few different iterations, with me making a list of areas that looked a bit off each time.
			<br><br>
			I used Substance Painter for most of the texturing instead of Photoshop, which allowed me to get a realtime preview of how the model would look. The ears are much better, with the edge flow correctly following the structure, whereas with Dylan V2 they were very primitive and oddly-shaped.
			<br><br>
			See if you can guess which Chris this is meant to be!
			<br><br>
		`,

		downloads: []
	},

	dylanV2: {
		title: "Dylan V2",
		date: "October 2022",

		images: {
			base: "assets/images/renders/characters/dylanV2/dylanV2",
			total: 6
		},

		description: `
			For the second semester's major project, I focused on improving my skills in character modelling. I brought front and side reference images of Dylan into Blender, then sculpted out a sphere to match his head and shoulders.
			<br><br>
			You can see the improvement in the facial features, with noticeably more detail in the eyes and nose. I still had trouble getting the lips looking right though. I learnt that textures can be deceiving, and that I had to reduce the contrast of the eyes considerably in Photoshop to get a satisfying result.
			<br><br>
			I experimented with XGen plugged into a PxrMarschnerHair shader to create the hair, and Maya's nHair system for the physics.
			<br><br>
		`,

		downloads: []
	},

	dylanV1: {
		title: "Dylan V1",
		date: "June 2022",

		images: {
			base: "assets/images/renders/characters/dylanV1/dylanV1",
			total: 4
		},

		description: `
			This was an attempt at recreating a classmate in 3D, which featured in the Mount Victoria render. I used photogrammetry of his head to create a base mesh, which was then covered in clean geometry.
			<br><br>
		`,

		downloads: []
	},

	cyberthug: {
		title: "Cyberthug",
		date: "January 2022",

		images: {
			base: "assets/images/renders/characters/cyberthug/cyberthug",
			total: 6
		},

		description: `
			This was the first character I modelled, based on the Cyberthug from 2021. I tried to find a balance between making it visually identical to the model and increasing the level of detail. I only got as far as making a "vanilla" model, without all the cyborg modifications.
			<br><br>
		`,

		downloads: []
	},


	// Environments
	panera: {
		title: "Panera Bread",
		date: "December 2025",

		images: {
			base: "assets/images/renders/environments/panera/panera",
			total: 6
		},

		description: `
			This environment is located way over in Colorado. I don't have the means to go there myself, but luckily there's plenty of reference from Google Maps and a certain infamous video...
			<br><br>
			Interior environments like this are always a pleasure to make, given that (apart from the carpark and some distant buildings) the boundaries are clearly defined, making it easy to know where to stop. It's like its own little isolated world.
			<br><br>
		`,

		downloads: []
	},

	bedroom: {
		title: "Bedroom",
		date: "WORK IN PROGRESS",

		images: {
			base: "assets/images/renders/environments/bedroom/bedroom",
			total: 3
		},

		description: `
			I try to achieve something new with every project, and this cluttered bedroom seemed like the perfect opportunity to go all in with the modelling. By establishing the layout of the camera and placeholder objects first, I was able to focus solely on what would be visible in the final render, and prioritize level-of-detail.
			<br><br>
		`,

		downloads: []
	},

	war: {
		title: "War Memorial",
		date: "January 2025",

		images: {
			base: "assets/images/renders/environments/war/war",
			total: 4
		},

		description: `
			The war memorial located in the Wellington CBD seemed like an interesting place to recreate. I tried to worry less about getting the measurements exactly right, and focus more on the bigger picture. The horse statue in the foreground was generated with photogrammetry, while everything else was modelled by hand.
			<br><br>
		`,

		downloads: []
	},

	steam: {
		title: "Steam Room",
		date: "October 2022",

		images: {
			base: "assets/images/renders/environments/steam/steam",
			total: 2
		},

		description: `
			This was part of a class project involving hexagonal rooms fitted together. This one was a bit rushed, but it makes use of volumetrics to simulate steam, and roughness maps for the foggy glass and wet floor. Given the small area, I focused on making it photorealistic.
			<br><br>
			The environment is based off a real location, and was created entirely from memory.
			<br><br>
		`,

		downloads: [
			{
				icon: "maya",
				text: "Download project files",
				href: "files/steamroom.zip"
			}
		]
	},

	classroom: {
		title: "Classroom",
		date: "August 2022",

		images: {
			base: "assets/images/renders/environments/classroom/classroom",
			total: 6
		},

		description: `
			After seeing how well Mount Victoria turned out, I decided to recreate a more convenient location. I took a different approach this time, taking note of the dimensions of the scene with a tape measure. The scene extends outside, revealing a carpark and alley.
			<br><br>
			It was interesting (and rather disorienting) to see the project develop as most of the modelling was done in that same room, on that workbench in the corner. I had planned to use it for a short film or virtual reality experience, or maybe as a “meta” level in the Major Projects game where the player would encounter me working on the game.
			<br><br>
		`,

		downloads: []
	},

	victoria: {
		title: "Mount Victoria",
		date: "June 2022",

		images: {
			base: "assets/images/renders/environments/victoria/victoria",
			total: 5
		},

		description: `
			This remake of a real location was made using large-scale photogrammetry and involved taking over 600 photos. Using the generated model as reference, I then manually recreated everything with clean geometry.
			<br><br>
			The grass was made using XGen, while the bark was faked using a simple greyscale displacement map converted from the original texture.
			<br><br>
		`,

		downloads: []
	},

	core: {
		title: "Cyberthug Core",
		date: "November 2021",

		images: {
			base: "assets/images/renders/environments/core/core",
			total: 7
		},

		description: `
			While constructing the physical model of the Cyberthug Core, I used Adobe Illustrator to create the shapes required for lasercutting. This made it easy to create 3D models from these shapes. The point of this render is to show how I imagine the Core to look, as physical lighting methods were limited.
			<br><br>
		`,

		downloads: []
	},


	// Props
	eye: {
		title: "Eye Rig",
		date: "WORK IN PROGRESS",

		images: {
			base: "assets/images/renders/props/eye/eye",
			total: 1
		},

		description: `
			This project stemmed from a desire to create an eyeball with an iris that constricts and dilates while maintaining its spherical shape, something that the traditional blendshape method doesn't allow. There are also settings for pupil control, artistic glint, glint size and sharpness. Multiple textures are included covering the basic eye colours.
			<br><br>
			Feel free to use it in your own character rigs and be sure to connect your aim targets to the provided hook node.
			<br><br>
		`,

		downloads: []
	},

	energy: {
		title: "Energy Drink",
		date: "August 2023",

		images: {
			base: "assets/images/renders/props/energy/energy",
			total: 5
		},

		description: `
			What a way to start the morning. As with the chocolate milk, I thought about redrawing the label, but decided that it would take a substantial amount of time for little payoff given the 2 hours allocated for this project.
			<br><br>
			A PxrVolume and disk light were used for the purple glow, while the particles and lightning were added in post-production. I made use of vignetting and lens distortion for added realism.
			<br><br>
		`,

		downloads: [
			{
				icon: "maya",
				text: "Download project files",
				href: "files/energydrink.zip"
			}
		]
	},

	milk: {
		title: "Chocolate Milk",
		date: "August 2023",

		images: {
			base: "assets/images/renders/props/milk/milk",
			total: 4
		},

		description: `
			This simple prop was made in just 2 hours. It was an experiment in fine-tuning specular and subsurface settings to match how it would look in the real world. If you look closely you can see the bottom of the lid is darker than the top, as it is covering the bottle and allowing less light to pass through.
			<br><br>
			One issue I discovered later was that the poor placement of edge loops to support the raised squares led to inconsistent shading, resulting in the cylindrical shape looking more like a rounded octagon.
			<br><br>
		`,

		downloads: [
			{
				icon: "maya",
				text: "Download project files",
				href: "files/chocolatemilk.zip"
			}
		]
	},

	lego: {
		title: "LEGO Harry Potter",
		date: "October 2022",

		images: {
			base: "assets/images/renders/props/lego/lego",
			total: 3
		},

		description: `
			This project involved recreating specific LEGO pieces from a chosen set, then fitting them together as you would in real life. I experimented with compositing it over a photo I took, taking into consideration light sources, viewing angles and depth-of-field.
			<br><br>
		`,

		downloads: [
			{
				icon: "maya",
				text: "Download project files",
				href: "files/harrypotter.zip"
			}
		]
	},

	sole: {
		title: "My Name is Sole Letafu",
		date: "April 2022",

		images: {
			base: "assets/images/animations/sole/sole",
			total: 3
		},

		description: `
		While learning photogrammetry, I took several photos of Dylan but didn't tell him what I planned to do with them.
		<br><br>
		I brought the images into RealityCapture, then unwrapped the texture and applied it to the Dylan V1 model. After some basic facial rigging involving blendshapes, I synced this animation to a voice clip and showed the result to the class.
		<br><br>
		The resemblance was incredible, but I don't think this model was blushing enough.
		<br><br>
		`,

		downloads: []
	},

	loops: {
		title: "Thematic Loops",
		date: "November 2021",

		images: {
			base: "assets/images/animations/loops/loops",
			total: 1
		},

		description: `
		This project involved creating a series of nine looping animations that share a relaxing theme. The assets were created in Adobe Illustrator, then manipulated in After Effects.
		<br><br>
		The assignment emphasised the importance of iteration, with draft animations being required for submission first, before moving onto refined versions later.
		<br><br>
		`,

		downloads: []
	},

	principles: {
		title: "Principles of Animation",
		date: "September 2018",

		images: {
			base: "assets/images/animations/principles/principles",
			total: 1
		},

		description: `
			Similar to the PlayStation commercial, this assignment required the use of the principles of animation, this time showing the adventures of a ball in a 3D setting.
			<br><br>
		`,

		downloads: []
	},

	party: {
		title: "The Party Room",
		date: "December 2017",

		images: {
			base: "assets/images/animations/party/party",
			total: 1
		},

		description: `
			After traversing a seemingly endless field, the guardian stumbles upon a room set up for a party that never happened. What's in the box?
			<br><br>
		`,

		downloads: []
	},

	playstation: {
		title: "PlayStation Commercial",
		date: "September 2017",

		images: {
			base: "assets/images/animations/playstation/playstation",
			total: 1
		},

		description: `
			This assignment required using After Effects to promote a product with as many of the principles of animation as possible.
			<br><br>
		`,

		downloads: []
	},

	toilet: {
		title: "The Toilet Thing",
		date: "July 2017",

		images: {
			base: "assets/images/animations/toilet/toilet",
			total: 1
		},

		description: `
			This assignment involved animating a blob character with limited features to a short voice clip. Given that the character doesn't have a mouth, the focus was on eye movements and body language to communicate the same idea.
			<br><br>
		`,

		downloads: []
	},

	game: {
		title: "Major Projects Game",
		date: "June 2022",

		images: {
			base: "assets/images/software/game/game",
			total: 8
		},

		description: `
			My major project for semester 1 was a video game and console reminiscent of the Nintendo DS. The game was designed as an exploration experience, featuring virtual exhibits of my work. For example, photography work would appear in a gallery, while the Cyberthug Core would be life-sized with ambient sound and lighting.
			<br><br>
			I aimed for a retro visual style, creating lighting and shadows manually with soft brushes and gradients rather than relying on modern pre-baked or real-time lighting systems.
			<br><br>
			I had planned to build the console using a Raspberry Pi, combining laser cutting and 3D printing for the casing. The operating system would be a stripped-down version of Ubuntu with a custom desktop environment, however poor planning and high ambitions meant the project was left half-finished.
			<br><br>
		`,

		downloads: [
			{
				icon: "windows",
				text: "Download for Windows",
				href: "files/majorprojects-windows.zip"
			},
			{
				icon: "unity",
				text: "Unity project files",
				href: "files/null.zip"
			}
		]
	},

	whitireia: {
		title: "Whitireia Assistant",
		date: "May 2020",

		images: {
			base: "assets/images/software/whitireia/whitireia",
			total: 3
		},

		description: `
			Similar to the Yoobee Timetable app, this was an experiment in designing pleasant mobile user interfaces. The overall style of this one is cleaner, with more thought put into it.
			<br><br>
		`,

		downloads: [
			{
				icon: "android",
				text: "Download for Android",
				href: "files/whitireia-assistant.apk"
			}
		]
	},

	petscop: {
		title: "Petscop Classic",
		date: "January 2019",

		images: {
			base: "assets/images/software/petscop/petscop",
			total: 4
		},

		description: `
			This Unity game is a partial remake of the cryptic webseries Petscop, specifically the scenes involving the house and kidnapping. Refer to episode 11 if you're not sure how to progress.
			<br><br>
		`,

		downloads: [
			{
				icon: "android",
				text: "Download for Android",
				href: "files/petscop-classic.apk"
			}
		]
	},

	yoobee: {
		title: "Yoobee Timetable",
		date: "February 2017",

		images: {
			base: "assets/images/software/yoobee/yoobee",
			total: 3
		},

		description: `
			This app was designed as a fancy way to keep track of classes for the year. I didn't intend to share it publicly, but rather use it as a way to practise UI/UX design. It features a link to the class Facebook group, as well as school contact info and holiday dates.
			<br><br>
		`,

		downloads: [
			{
				icon: "android",
				text: "Download for Android",
				href: "files/yoobee-timetable.apk"
			}
		]
	},

	finaldrives: {
		title: "NZ Final Drives",
		date: "October 2023",

		images: {
			base: "assets/images/software/finaldrives/finaldrives",
			total: 3
		},

		description: `
			This was a freelance job that involved improving SEO visibility, performance and user-friendliness of NZ Final Drives' website. I noticed the old one contained a lot of redundant information, such as the presence of a contact form right next to the company's phone numbers and email address.
			<br><br>
			The old website featured a products page where customers could search for parts, but ultimately everything lead to contacting the company for quotes. I figured it was appropriate to streamline everything to a single page, with the product finder moved to a dialog at the top of the page.
			<br><br>
		`,

		downloads: [
			{
				icon: "website",
				text: "Visit new website",
				href: "https://nzfinaldrives1101.github.io/"
			},
			{
				icon: "website",
				text: "Visit old website",
				href: "https://nzfinaldrives.co.nz/"
			}
		]
	}
};
