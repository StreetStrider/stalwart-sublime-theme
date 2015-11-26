
module.exports = function hexa (color)
{
	if (color.alpha() < 1)
	{
		return color.hex() + alpha16(color.alpha())
	}
	else
	{
		return color.hex()
	}
}

function alpha16 (alpha)
{
	alpha = alpha * 255
	alpha = Number(alpha.toFixed(0))
	alpha = alpha.toString(16)
	return alpha
}
