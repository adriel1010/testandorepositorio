/**
 * Theme Customizer related js
 */

jQuery(document).ready(function() {

   jQuery('#customize-info .preview-notice').append(
      '<a class="themegrill-pro-info" href="http://themegrill.com/themes/spacious-pro/" target="_blank">{pro}</a>'
      .replace('{pro}',spacious_customizer_obj.pro));

});