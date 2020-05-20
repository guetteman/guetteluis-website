import { SKILLS } from '../../_skills/skills';

export function getRandomSkills(limit = null) {
	let skills = SKILLS;

	for (let i = 0; i < skills.length; i++) {
		const j = Math.floor(Math.random() * i);
		const temp = skills[i];
		skills[i] = skills[j];
		skills[j] = temp;
	}

	if (limit) {
		skills = skills.slice(0, limit);
	}

	return skills;
}
