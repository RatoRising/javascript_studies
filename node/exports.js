// function getFlag(flags) {
//    const index = process.argv.indexOf(flags) + 1
//    return process.argv[index]
// }

function getFlag() {
	for (let flags in process.argv) {
		return flags;
	}
}

module.exports = getFlag;
