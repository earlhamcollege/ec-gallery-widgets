module.exports = {        
	extend: 'apostrophe-widgets',        
	label: 'EC Gallery',
	perPage: 50,
	beforeConstruct: function(self, options) {
		options.addFields = [
	    	{
				name: 'items',
				type: 'area',
				label: 'Gallery Items',
				options: {
					widgets: {
						'apostrophe-images': {
							limit: 1,
							size: 'full'
						},
						'apostrophe-video': {},
						'ec-360': {}
					}
				}
			},
			{
				name: 'fullWidth',
				type: 'boolean',
				label: 'Full Width',
				def: true
			},
			{
				name: 'showDots',
				type: 'boolean',
				label: 'Show Dots',
				def: false
			}
    	].concat(options.addFields || [])

    	options.arrangeFields = [
	    	{
				name: 'gallerySettings',
				label: 'Configuration',
				fields: [ 'fullWidth', 'showDots' ],
				last: true
			},
			{
				name: 'gallery',
				label: 'Gallery',
				fields: [ 'items' ]
			}
    	].concat(options.arrangeFields || [])
	},
	construct: function(self, options) {
		var superPushAssets = self.pushAssets;
		
		self.pushAssets = function() {
			superPushAssets();
			self.pushAsset('stylesheet', '/node_modules/slick-carousel/slick/slick');
			self.pushAsset('stylesheet', '/node_modules/slick-carousel/slick/slick-theme');
			self.pushAsset('stylesheet', 'always');
			self.pushAsset('stylesheet', 'custom');
			self.pushAsset('script', '/node_modules/slick-carousel/slick/slick');
			self.pushAsset('script', 'always');
		}
	}
};