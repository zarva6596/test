<template>
  <div id="paypal-button-container-P-6KD59167UK6560543MXLHLCQ" />
</template>

<script setup>
paypal.Buttons({
  style: {
    shape: 'pill',
    color: 'silver',
    layout: 'horizontal',
    label: 'subscribe',
  },
  createSubscription: function(data, actions) {
    return actions.subscription.create({
      /* Creates the subscription */
      plan_id: 'P-6KD59167UK6560543MXLHLCQ',
    });
  },
  onApprove: function(data, actions) {
    alert(data.subscriptionID); // You can add optional success message for the subscriber here
  },
}).render('#paypal-button-container-P-6KD59167UK6560543MXLHLCQ'); // Renders the PayPal button
</script>
