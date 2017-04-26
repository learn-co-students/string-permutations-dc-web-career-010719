describe('#largestSubarraySum', function() {
	it('largest subarray sum', function(){
		let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
		expect(largestSubarraySum([array])).toEqual(16)
	})
});
