using System.ComponentModel.DataAnnotations;

namespace BlazorSignatureJS.Models
{
    public class SignatureApproved
    {
        [Required(ErrorMessage = "Printed name is required")]
        public string PrintedName { get; set; }
        public string Signature { get; set; }
        [Required(ErrorMessage = "Signature date is required")]
        public DateTime SignatureDate { get; set; } = DateTime.UtcNow;
    }
}
